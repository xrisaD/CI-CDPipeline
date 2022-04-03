#!/usr/bin/env groovy

pipeline {
    agent {
        docker { 
            image 'node:16.13.1-alpine'
            args '-u root:root'
        }
    }
    stages {
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
                echo "Deploying to Heroku"
                sh 'deploy_heroku.sh'
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
