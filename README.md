# DevOps Mini-Project Documentation

## Introduction
This mini-project demonstrates a complete DevOps workflow to containerize, deploy, and monitor a web application. The project leverages tools such as Docker, Kubernetes, Jenkins, Prometheus, and Grafana. While ArgoCD integration and Jenkins pipeline were partially implemented, other aspects, including monitoring and application deployment, were successfully completed.

---

## Objectives
1. **Application**: Deploy a functional web application developed by the student using an MVC or microservices architecture.
2. **Containerization**: Package the application into Docker containers using Dockerfile(s) and Docker Compose.
3. **Kubernetes Deployment**: Deploy the application on a local Kubernetes cluster using Minikube.
4. **Monitoring**: Implement observability with Prometheus and Grafana.
5. **Integration with Jenkins**: Automate CI/CD pipeline for building, scanning, and pushing Docker images (partially completed).

---

## Achievements
### Application
- A functional MERN-based stock management system was used.
- Successfully containerized and deployed the application.

### Containerization
- Dockerfiles were created for the frontend and backend.
- Docker Compose was used to orchestrate containers locally.

### Kubernetes Deployment
- Manifest files were created for Deployments, Services, and ConfigMaps.
- Kubernetes resources were applied to a local Minikube cluster.
- Successfully deployed the frontend, backend, and MongoDB containers to Kubernetes.

### Monitoring with Prometheus and Grafana
- **Prometheus** was configured to collect metrics from the application and the cluster.
- **Grafana** dashboards were created for visualizing metrics.
- Tested a custom Prometheus query:
  ```
  node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes
  ```
  This displayed the total memory used by the node.

### Security Scanning with Trivy
- Scanned Docker images for vulnerabilities using Trivy.
- Generated security reports to improve image security.

---

## Pending/Unsuccessful Tasks
1. **Jenkins**:
   - Jenkins was installed and configured.
   - Encountered issues with the Jenkins daemon preventing proper operation.
2. **ArgoCD**:
   - Integration with ArgoCD for GitOps strategy was not implemented.

---


## Instructions
### 1. Prerequisites
- Install Docker, Docker Compose, Minikube, and kubectl.
- Set up Prometheus and Grafana using Kubernetes manifests.

### 2. Deploying the Application
1. **Containerization**:
   - Build Docker images for the frontend and backend.
   ```bash
   docker build -t my-frontend ./frontend
   docker build -t my-backend ./backend
   ```
   - Test locally with Docker Compose:
   ```bash
   docker-compose up
   ```

2. **Kubernetes Deployment**:
   - Start Minikube:
   ```bash
   minikube start
   ```
   - Apply Kubernetes manifests:
   ```bash
   kubectl apply -f ./k8s-manifests
   ```
   - Verify pod status:
   ```bash
   kubectl get pods
   ```

3. **Monitoring**:
   - Deploy Prometheus and Grafana:
   ```bash
   kubectl apply -f ./monitoring/prometheus-deployment.yaml
   kubectl apply -f ./monitoring/grafana-deployment.yaml
   ```
   - Access Grafana:
     - Forward Grafana port:
     ```bash
     kubectl port-forward <grafana-pod> 3000:3000
     ```
     - Open Grafana in a browser at `http://localhost:3000`.
     - Import dashboards and visualize metrics.

4. **Testing Metrics**:
   - Prometheus queries to try:
     - Total node memory usage:
       ```
       node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes
       ```
     - CPU utilization:
       ```
       rate(node_cpu_seconds_total{mode!="idle"}[5m])
       ```
     - Disk space usage:
       ```
       node_filesystem_size_bytes - node_filesystem_free_bytes
       ```

### 3. Security Scanning with Trivy
- Install Trivy:
  ```bash
  brew install trivy # Or use the installer for Windows
  ```
- Scan Docker images:
  ```bash
  trivy image my-frontend
  trivy image my-backend
  ```

---

## Known Issues
- Jenkins pipeline issues due to daemon errors.
- ArgoCD integration not completed.

---

## Conclusion
The project successfully demonstrated containerization, Kubernetes deployment, and monitoring using Prometheus and Grafana. Future improvements include resolving Jenkins issues and implementing ArgoCD for GitOps.

