pipeline {
    agent {
        docker {
            image 'alpine:3.14' 
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
