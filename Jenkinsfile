pipeline {
    agent {
        docker {
            image 'node:16-alpine' 
        }
    } 
    stages {
    
        stage('Build') { 
            steps {
                sh 'npm ci'
                sh 'chown -R 107:113 "/.npm"'
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
