pipeline {
    agent any
    tools { nodejs "node"}
    stages {
        stage('Build') {
            steps {
                echo 'building the application..'
                bat 'npm --version'
                retry(4){
                    bat 'npm run server'
                }
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
