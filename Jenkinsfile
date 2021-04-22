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
                bad 'cd client'
                bad 'npm i @testing-library/jest-dom @testing-library/react @testing-library/user-event axios moment react react-dom react-moment react-redux react-router-dom'
                bad 'npm i react-scripts redux redux-devtools-extension redux-thunk uuid web-vitals'
                retry(2){
                    bat 'npm run dev'
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
