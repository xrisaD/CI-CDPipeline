pipeline {
    agent {
        docker {
            image 'node:16-alpine' 
        }
    } 
    stages {
    
        stage('Build') { 
            steps {
                sh 'sudo chown -R 107:113 "/.npm"'
                sh 'npm ci'
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
