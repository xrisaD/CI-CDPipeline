pipeline {
    agent {
        docker {
            image 'node:16.x-alpine' 
        }
    } 
    stages {
    
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
