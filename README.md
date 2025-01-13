# GestionDesStocks_MERN
DevOps Mini-Project Documentation
Introduction
This mini-project demonstrates a complete DevOps workflow to containerize, deploy, and monitor a web application. The project leverages tools such as Docker, Kubernetes, Jenkins, Prometheus, and Grafana. While ArgoCD integration and Jenkins pipeline were partially implemented, other aspects, including monitoring and application deployment, were successfully completed.
________________________________________
Objectives
1.	Application: Deploy a functional web application developed by the student using an MVC or microservices architecture.
2.	Containerization: Package the application into Docker containers using Dockerfile(s) and Docker Compose.
3.	Kubernetes Deployment: Deploy the application on a local Kubernetes cluster using Minikube.
4.	Monitoring: Implement observability with Prometheus and Grafana.
5.	Integration with Jenkins: Automate CI/CD pipeline for building, scanning, and pushing Docker images (partially completed).
________________________________________
Achievements
Application
•	A functional MERN-based stock management system was used.
•	Successfully containerized and deployed the application.
Containerization
•	Dockerfiles were created for the frontend and backend.
•	Docker Compose was used to orchestrate containers locally.
Kubernetes Deployment
•	Manifest files were created for Deployments, Services, and ConfigMaps.
•	Kubernetes resources were applied to a local Minikube cluster.
•	Successfully deployed the frontend, backend, and MongoDB containers to Kubernetes.
Monitoring with Prometheus and Grafana
•	Prometheus was configured to collect metrics from the application and the cluster.
•	Grafana dashboards were created for visualizing metrics.
•	Tested a custom Prometheus query: 
•	node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes
•	rate(node_cpu_seconds_total{mode!="idle"}[5m])
This displayed the total memory used by the node.
Security Scanning with Trivy
•	Scanned Docker images for vulnerabilities using Trivy.
•	Generated security reports to improve image security.
________________________________________
Pending/Unsuccessful Tasks
1.	Jenkins: 
o	Jenkins was installed and configured.
o	Encountered issues with the Jenkins daemon preventing proper operation.
2.	ArgoCD: 
o	Integration with ArgoCD for GitOps strategy was not implemented.
________________________________________

Instructions
1. Prerequisites
•	Install Docker, Docker Compose, Minikube, and kubectl.
•	Set up Prometheus and Grafana using Kubernetes manifests.
2. Deploying the Application
1.	Containerization:
o	Build Docker images for the frontend and backend.
2.	docker build -t my-frontend ./frontend
3.	docker build -t my-backend ./backend
o	Test locally with Docker Compose:
4.	docker-compose up
5.	Kubernetes Deployment:
o	Start Minikube:
6.	minikube start
o	Apply Kubernetes manifests:
7.	kubectl apply -f ./k8s-manifests
o	Verify pod status:
8.	kubectl get pods
9.	Monitoring:
o	Deploy Prometheus and Grafana:
10.	kubectl apply -f ./monitoring/prometheus-deployment.yaml
11.	kubectl apply -f ./monitoring/grafana-deployment.yaml
o	Access Grafana: 
	Forward Grafana port:
o	kubectl port-forward <grafana-pod> 3000:3000
	Open Grafana in a browser at http://localhost:3000.
	Import dashboards and visualize metrics.
12.	Testing Metrics:
o	Prometheus queries to try: 
	Total node memory usage: 
	node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes
	CPU utilization: 
	rate(node_cpu_seconds_total{mode!="idle"}[5m])
	Disk space usage: 
	node_filesystem_size_bytes - node_filesystem_free_bytes
3. Security Scanning with Trivy
•	Install Trivy: 
•	brew install trivy # Or use the installer for Windows
•	Scan Docker images: 
•	trivy image my-frontend
•	trivy image my-backend
________________________________________
Known Issues
•	Jenkins pipeline issues due to daemon errors.
•	ArgoCD integration not completed.
________________________________________
Conclusion
The project successfully demonstrated containerization, Kubernetes deployment, and monitoring using Prometheus and Grafana. Future improvements include resolving Jenkins issues and implementing ArgoCD for GitOps.

