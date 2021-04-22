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
                    archiveArtifacts artifacts: 'build/libs/**/*.jar'
                }
            }
        }
        stage('test'){
            steps {
                echo 'testing the application..'
            }
            post {
                always {
                    junit 'build/reports/**/*.xml'
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

