pipeline {
    agent {
        docker {
            image 'node:16.14-alpine3.14' 
        }
    } 
    stages {
    
        stage('Build') { 
            steps {
                sh 'npm ci'
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
