pipeline{
    agent any
    triggers{
        pollSCM'H/15 * * * *'
    }
    stages {
        stage('source checkout'){
            steps {
                echo 'cloning source code finished'
            }
        }
        stage('TESTS'){
            steps {
                echo 'testing code finished'
            }
        }
        stage('Docker Build'){
            steps {
                echo 'Docker Build starting'
                bat '''docker build -t front-end:1 .'''
            }
        }        
    }
}