# DEPLOYMENT.md – iWORKZ Investor Website

This guide covers how to deploy the iWORKZ Investor Website to staging, production, and cloud environments. It includes best practices for Docker, Kubernetes, CI/CD, environment variables, and security.

---

## Environments

* **Local Development:** See [INSTALL.md](./INSTALL.md)
* **Staging:** Used for QA, demos, and user acceptance testing
* **Production:** Public-facing site for investors, stakeholders, and partners

---

## 1. Docker Deployment (Staging & Production)

### Build & Run with Docker Compose

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

* Ensure your `.env` is set to production values before deploying.

### Docker Compose Best Practices

* Use separate files for local and production (`docker-compose.yml`, `docker-compose.prod.yml`)
* Keep secrets and credentials out of Dockerfiles and Compose files (use environment variables)
* Back up all volumes before major upgrades

---

## 2. Kubernetes Deployment (Optional/Advanced)

### Steps:

1. Build and push Docker images to your container registry (e.g., AWS ECR, Docker Hub, Azure Container Registry):

   ```bash
   docker build -t your-image:latest .
   docker tag your-image:latest registry-url/your-image:latest
   docker push registry-url/your-image:latest
   ```
2. Update your Kubernetes deployment YAML to use the new image tag.
3. Apply changes with:

   ```bash
   kubectl apply -f k8s/deployment.yaml
   kubectl rollout status deployment/iworkz-app
   ```
4. Configure Kubernetes Secrets for all credentials and API keys.

---

## 3. Cloud Deployment

### AWS Example (EC2, ECS, EKS)

* Use Docker images or Kubernetes manifests as above
* Set up ALB/NLB for load balancing
* Configure Route 53 for DNS
* Use S3 for static assets if required
* Integrate with AWS Secrets Manager for secure credentials

### Azure Example (App Service, AKS)

* Push Docker image to Azure Container Registry (ACR)
* Deploy via Azure App Service or AKS with your YAML configs
* Use Azure Key Vault for secrets
* Monitor with Azure Monitor or Grafana

---

## 4. Environment Variables

* Store sensitive data in `.env.production` (never commit this to the repo)
* Use secrets managers or CI/CD secrets (GitHub Actions, AWS Secrets Manager, Azure Key Vault)
* Document all required variables in `.env.example`

---

## 5. CI/CD (GitHub Actions)

* All deployments should be triggered via Pull Requests and automated pipelines
* Example workflow: `.github/workflows/deploy.yml`
* Include steps for linting, testing, building Docker image, pushing to registry, and deploying to cloud/Kubernetes

---

## 6. Monitoring & Logging

* Deploy Grafana/Prometheus or cloud-native tools for uptime and performance
* Configure central logging (CloudWatch, Azure Monitor, etc.)
* Set up alerts for downtime or critical errors

---

## 7. Security Checklist

* All traffic served over HTTPS (enforce SSL/TLS)
* Enable firewalls and restrict SSH/remote access
* Regularly rotate secrets and keys
* Run security scans on Docker images (`docker scan`, Trivy)
* Follow best practices in [SECURITY.md](./SECURITY.md)

---

## 8. Rollback & Recovery

* Use tagged Docker images and Kubernetes rollbacks (`kubectl rollout undo`)
* Automated backups for databases and persistent storage
* Document rollback steps for every deployment

---

## 9. Additional Resources

* [INSTALL.md](./INSTALL.md)
* [CONTRIBUTING.md](./CONTRIBUTING.md)
* [Where to Find What (Google Drive)](ADD_LINK_ONCE_FILE_IS_UPLOADED)

---

For any deployment questions or urgent issues, contact the PMO (Chattie) or file an Issue in GitHub.
