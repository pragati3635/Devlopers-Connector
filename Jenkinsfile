pipeline {
    agent any
    tools { nodejs "node"}
    environment {
        CI ='true'
    }
    stages {
        stage('Build') {
            steps {
                echo 'building the application..'
                bat 'npm --version'
            }
        }
        stage('test'){
            steps {
                echo 'testing the application..'
                sh './test.sh'
            }
        }
        stage('deploy'){
            steps {
                echo 'deploying the application..'
            }
        }
    }
}
