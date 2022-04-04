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
                sh 'ls -al /usr/bin'
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
                echo "Checkinfg if we are authenticated to the heroku repo"
                sh "if git ls-remote heroku >/dev/null ; then echo Authenticated to heroku! ; fi"
                echo "Ls remote heroku"
                sh "git ls-remote heroku"
                echo "Doing git remote show on heroku"
                sh "git remote show heroku"
                echo "Deploying to Heroku"
                sh './deploy_heroku.sh'
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
