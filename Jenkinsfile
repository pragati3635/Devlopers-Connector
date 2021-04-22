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
            }
        }
        stage('deliver'){
            steps {
                echo 'delivering the appication..'
            }
        }
     }
     post {
         success {
             echo 'SUCCESS!!'
         }
         failure {
             echo 'Failures !!'
         }
         always {
             junit 'build/reports/**/*.xml'
         }
     }
 }

