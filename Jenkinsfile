pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    } 
    stages {
        stage('Git') {
           steps {
             git 'https://github.com/xrisaD/CI-CDPipeline'
           }
        }
    
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm run build --if-present' 
            }
        }
        stage('Test') { 
            steps {
                sh 'npm test'
            }
        }
    }
}
