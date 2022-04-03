pipeline {
    agent {
        docker {
            image 'alpine:3.14' 
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
