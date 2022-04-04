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
                    echo "Showing remotes"
                    sh "git branch -a"
                    sh './deploy_heroku.sh'
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
            echo 'I am unstable :/'
        }
        failure {
            echo 'I failed :('
        }
        changed {
            echo 'Things were different before...'
        }
    }
}
