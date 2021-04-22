pipeline {
    agent any
    tools { nodejs "node"}
    stages {
        stage('Build') {
            steps {
                echo 'building the application..'
                bat 'npm --version'
                bat 'npm i autoprefixer bcryptjs bootstrap config css-loader express express-validator gravatar jquery jsonwebtoken mongoose popper.js'
                bat 'npm i postcss-loader precss react-bootstrap request sass-loader style-loader'
                bat 'npm i nodemon concurrently'
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
