# INSTALL.md – iWORKZ Investor Website

This guide explains how to set up the iWORKZ Investor Website for local development and testing. Please follow each step carefully. For deployment and production, see [DEPLOYMENT.md](./DEPLOYMENT.md).

---

## Prerequisites

* Node.js (v18 or higher) & npm (v9 or higher)
* Git
* Docker & Docker Compose (for containerised setup)
* (Optional) kubectl & Kubernetes (for orchestration/testing)

---

## 1. Clone the Repository

```bash
git clone https://github.com/iworkz/investor-website.git
cd investor-website
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Running the Development Server

```bash
npm run dev
```

* Visit `http://localhost:3000` to access the site locally.
* Hot reloading is enabled by default.

---

## 4. Dockerised Local Setup (Recommended)

### Build & Start with Docker Compose

```bash
docker-compose up --build
```

* This will spin up the Next.js frontend, backend API, and any database services defined in `docker-compose.yml`.

---

## 5. Environment Variables

* Copy the sample environment file and update as needed:

```bash
cp .env.example .env
```

* Edit `.env` with any API keys, DB credentials, etc.
* **Never commit secrets or credentials to the repo.**

---

## 6. Useful Commands

* **Lint:** `npm run lint`
* **Format:** `npm run format`
* **Test:** `npm run test`
* **Build:** `npm run build`

---

## 7. Troubleshooting

* Ensure all required ports are free (`3000` for web, others for API/DB as needed).
* If you hit build errors, try deleting `node_modules` and running `npm install` again.
* For Docker issues, check `docker ps` and logs for each service.
* For help, contact the PMO (Chattie) or create an Issue on GitHub.

---

## 8. Additional Resources

* [DEPLOYMENT.md](./DEPLOYMENT.md)
* [CONTRIBUTING.md](./CONTRIBUTING.md)
* [Where to Find What (Google Drive)](ADD_LINK_ONCE_FILE_IS_UPLOADED)

---

You’re ready to start building and testing iWORKZ locally!
