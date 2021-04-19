pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                echo 'building the application..'
                bat 'cd desktop'
                bat 'cd web development'
                bat 'cd devconnector'
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
