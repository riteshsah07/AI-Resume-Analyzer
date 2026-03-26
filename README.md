# AI-Resume-Analyzer
✦ AI Resume Analyzer
Cloud-Native Static Application with Kubernetes Monitoring
❖ Overview

This project is a cloud-native deployment of a static landing page that simulates an AI-powered Resume Analyzer platform. The main focus is not just on frontend design, but on how a simple application can be containerized, deployed, scaled, and monitored using modern DevOps tools.

The application is deployed on a local Kubernetes cluster and monitored in real time using Prometheus and Grafana, providing insights into system performance and resource utilization.

❖ Key Highlights
Clean and responsive landing page design
Drag-and-drop resume upload interface (UI simulation)
Simulated ATS score with dynamic progress bar
Containerized using Docker
Deployed on Kubernetes using Minikube
Exposed via NodePort service
Real-time monitoring using Prometheus
Visualization dashboards using Grafana
Load simulation to observe system behavior
❖ Tech Stack

Frontend

HTML
CSS
JavaScript

DevOps & Cloud

Docker
Kubernetes (Minikube)
Helm

Monitoring

Prometheus
Grafana
❖ Architecture
User (Browser)
        ↓
Kubernetes Service (NodePort)
        ↓
Deployment (Manages Pods)
        ↓
Pods (Nginx Container)
        ↓
Static Website (HTML, CSS, JS)

Monitoring Pipeline:

Kubernetes Cluster → Prometheus → Grafana Dashboard
❖ How It Works

The application is packaged into a Docker container using Nginx to serve static files. This container is deployed on a Kubernetes cluster using a Deployment configuration, which manages multiple replicas of the application.

A Kubernetes Service exposes the application, making it accessible through the browser.

For monitoring, Prometheus collects metrics such as CPU and memory usage from the cluster, while Grafana visualizes these metrics through dashboards. Load is generated manually to simulate real user traffic and observe system behavior.

❖ Setup & Execution
1. Start Minikube
minikube start
2. Build Image
minikube image build -t ai-resume-landing .
3. Deploy to Kubernetes
kubectl apply -f k8s/
4. Access Application
minikube service ai-resume-service
❖ Monitoring Setup
Install Prometheus
helm install prometheus prometheus-community/prometheus -n monitoring
Install Grafana
helm install grafana grafana/grafana -n monitoring
Access Dashboards
kubectl port-forward svc/grafana 3000:80 -n monitoring
❖ Load Testing

To simulate real-world traffic:

kubectl run -i --tty load-generator --rm --image=busybox -- /bin/sh

Inside container:

while true; do wget -q -O- http://ai-resume-service; done

This helps visualize CPU and system metrics in Grafana.

❖ Key Learnings
Practical understanding of containerization
Deployment using Kubernetes
Service exposure and networking
Real-time monitoring and observability
Handling system load and performance tracking
❖ Limitations
Static frontend only
No backend or database
Resume upload and ATS scoring are simulated
❖ Future Improvements
Backend integration for real resume analysis
Database for storing user data
Auto-scaling using HPA
CI/CD pipeline integration
Deployment on cloud platforms
❖ Why This Project Stands Out

This project goes beyond a traditional frontend implementation. It demonstrates how even a simple application can be deployed using industry-relevant tools and monitored in a production-like environment.

It reflects practical knowledge of cloud-native architecture, making it highly relevant for roles in DevOps, Cloud Engineering, and Backend Systems.

❖ Author

Ritesh Sah
Cloud & DevOps Enthusiast
