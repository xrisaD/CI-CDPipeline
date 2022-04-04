#!/usr/bin/env groovy

pipeline {
    agent {
        docker { 
            image 'node:16.13.1-alpine'
            args '-u root:root'
        }
    }
    stages {
        stage('Prebuild') {
            steps {
                sh 'apk add bash'
                sh 'apk add curl'
                sh 'curl https://cli-assets.heroku.com/install.sh | sh'
                sh 'apk add git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo "Running tests!"
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'HEROKU_API_KEY', variable: 'HEROKU_API_KEY')]) {
                    withCredentials([usernamePassword(credentialsId: 'f643630b-cfd9-4d7c-80ba-0e349d706599', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USER')]) {
                        sh 'git config credential.helper \'!f() { sleep 1; echo "username=${GIT_USER}"; echo "password=${GIT_PASSWORD}"; }; f\''

                        sh 'echo machine git.heroku.com >> .netrc'
                        sh 'echo login apikey >> .netrc'
                        sh "echo password  $HEROKU_API_KEY >> .netrc" 
                        sh './deploy_heroku.sh'
                    }
                    
                }
            }
        }
    }
    post {
        always {
            echo 'One way or another, I have finished'
        }
        success {
            echo 'I succeeeded!'
        }
        unstable {
            echo 'I am unstable'
        }
        failure {
            echo 'I have failed'
        }
        changed {
            echo 'Changedd'
        }
    }
}
