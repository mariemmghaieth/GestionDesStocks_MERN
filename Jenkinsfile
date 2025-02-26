pipeline {
    agent any

    environment {
        BACKEND_IMAGE = 'mariemmgh/gestiondesstocks-backend:latest'
        FRONTEND_IMAGE = 'mariemmgh/gestiondesstocks-frontend:latest'
        DOCKER_CREDENTIALS_ID = 'dockerhub-cred'
        DOCKER_CONTEXT = 'default'
    }

    tools {
        dockerTool 'docker'  // Referring to the global Docker tool setup
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mariemmghaieth/GestionDesStocks_MERN.git', credentialsId: 'github-cred'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    // Building the backend and frontend images
                    sh 'docker build -t $BACKEND_IMAGE app-blog/'
                    sh 'docker build -t $FRONTEND_IMAGE design-blog/'
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    withEnv(["DOCKER_CONTEXT=${env.DOCKER_CONTEXT}"]) {
                        // Using credentials to push images to Docker Hub
                        withDockerRegistry([credentialsId: DOCKER_CREDENTIALS_ID, url: 'https://index.docker.io/v1/']) {
                            sh 'docker push $BACKEND_IMAGE'
                            sh 'docker push $FRONTEND_IMAGE'
                        }
                    }
                }
            }
        }
    }
}
