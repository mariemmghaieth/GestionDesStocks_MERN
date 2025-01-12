pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'dockerhub-cred'  // Docker Hub credentials ID
        DOCKERHUB_REPO_BACKEND = 'mariemmgh/gestiondesstocks-backend'
        DOCKERHUB_REPO_FRONTEND = 'mariemmgh/gestiondesstocks-frontend'
    }

    stages {
        stage('Build Backend Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_REPO_BACKEND:latest ./backend'
            }
        }
        stage('Push Backend Image') {
            steps {
                withDockerRegistry(credentialsId: "$DOCKER_CREDENTIALS_ID", url: '') {
                    sh 'docker push $DOCKERHUB_REPO_BACKEND:latest'
                }
            }
        }
        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_REPO_FRONTEND:latest ./frontend'
            }
        }
        stage('Push Frontend Image') {
            steps {
                withDockerRegistry(credentialsId: "$DOCKER_CREDENTIALS_ID", url: '') {
                    sh 'docker push $DOCKERHUB_REPO_FRONTEND:latest'
                }
            }
        }
    }
}
