pipeline {
    agent any
    tools { nodejs "node"}
    stages {
        stage('Build') {
            steps {
                echo 'building the application..'
                bat 'npm --version'
                bat 'npm run dev'
            }
        }
        stage('test'){
            steps {
                echo 'testing the application..'
                bat 'npm install --only=dev'
                
            }
        }
        stage('deploy'){
            steps {
                echo 'deploying the application..'
            }
        }
    }
}
