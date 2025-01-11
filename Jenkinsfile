pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'dockerhub-cred'
        DOCKERHUB_REPO_BACKEND = 'mariemmgh/gestiondesstocks-backend'
        DOCKERHUB_REPO_FRONTEND = 'mariemmgh/gestiondesstocks-frontend'
    }

    stages {
        stage('Build Backend Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_REPO_BACKEND:latest ./backend'
            }
        }
        stage('Scan Backend Image') {
            steps {
                sh 'trivy image $DOCKERHUB_REPO_BACKEND:latest'
            }
        }
        stage('Push Backend Image to Docker Hub') {
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
        stage('Scan Frontend Image') {
            steps {
                sh 'trivy image $DOCKERHUB_REPO_FRONTEND:latest'
            }
        }
        stage('Push Frontend Image to Docker Hub') {
            steps {
                withDockerRegistry(credentialsId: "$DOCKER_CREDENTIALS_ID", url: '') {
                    sh 'docker push $DOCKERHUB_REPO_FRONTEND:latest'
                }
            }
        }
    }
}
