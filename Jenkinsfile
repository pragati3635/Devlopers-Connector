pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                echo 'building the application..'
                bat 'npm run dev'
                
            }
        }
        stage('test'){
            steps {
                echo 'testing the application..'
            }
        }
        stage('deploy'){
            steps {
                echo 'deploying the application..'
            }
        }
    }
}
