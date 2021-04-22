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
            post {
                success {
                    archiveArtifacts 'target/*.hpi,target/*.jpi'
                }
            }
        }
        stage('test'){
            steps {
                echo 'testing the application..'
            }
            post {
                always {
                    junit '**/surefire-reports/**/*.xml'
                }
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
     }
 }

