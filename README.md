# iWORKZ Investor Website

## Executive Summary

The iWORKZ Investor Website is the digital flagship for global stakeholders, strategic partners, and investors. Built with the latest web technology and a security-first approach, this portal delivers real-time data, live dashboards, and AI-powered support—all hosted on a fortress-class infrastructure for maximum performance, reliability, and trust.

---

## Project Goals

* **Transparency:** Offer investors real-time access to financials, KPIs, and reports.
* **Security:** Protect sensitive data with enterprise-grade architecture (Docker, Kubernetes, best-in-class security practices).
* **Agility:** Enable fast, zero-downtime updates and rapid response to market or compliance changes.
* **AI-Powered Engagement:** Integrate multilingual chatbots (Claude, Qwen) for live support and Q\&A.
* **Scalability:** Seamless migration from on-premise (Minisforum) to cloud (AWS, Azure) for global reach.

---

## Quick Links

* **Project Artefacts & Documentation:**
  [Google Drive Project Folder](https://drive.google.com/drive/folders/1rtNSzTJ9R56a58Fj_4Fs7d2b7bYCzZEe?usp=sharing)

* **Sprint Board & Reports:**
  [Sprint Board & Reports (Drive)](https://drive.google.com/drive/folders/1b15BuEti2rk3ejv8NDPXPpfsvm2SV3ON?usp=drive_link)

* **Designs & Visuals:**
  [Designs & Visuals (Drive)](https://drive.google.com/drive/folders/18K9bVxQ-oRioh0KPr8bBdobfQdaIpbz6?usp=drive_link)

* **Technical Appendices:**
  [Technical Appendices (Drive)](https://drive.google.com/drive/folders/1rU2HLeUjSw-B5_-xK5R1MLkaognfzUsA?usp=drive_link)

* **Where to Find What:**
  [Where to Find What (Drive)](ADD_LINK_ONCE_FILE_IS_UPLOADED)

* **Quick Links

- **Repo Setup Checklist:**  
  [REPO_SETUP_CHECKLIST.md (Drive)](https://drive.google.com/drive/folders/1pd-YOaByjXqnrvtLSlUQncioJSXUAqqH?usp=drive_link)

---

📊 Project Dashboard & Gantt Chart
Live Gantt Chart:
iWORKZ Gantt Chart Dashboard (Google Sheets)
Track project phases, deadlines, dependencies, and milestones in real-time. Updated each sprint.

Sprint Board:
GitHub Project Board
View backlog, tasks in progress, and completed items.

🤖 Resource Management & MCP (Multi-Agent Collaboration Protocol)
Resource MCP Documents:

Current Sprint MCP

MCP Template (Drive)

Every team member, AI agent, and automation is tracked and assigned in the MCP doc per sprint for accountability and clarity.

---

## 🤖 Automation Systems

### GitHub Stand-Up Automation ✅ PRODUCTION
- **Daily Reports:** Automated at 9:00 AM JST
- **Real-time Tracking:** Live issue and PR monitoring
- **Team Integration:** Automatic updates to development workflow
- **Built:** May 31, 2025 by Carlos Mundim

**Files:**
- `automation/github-standup.sh` - Daily automation script
- `automation/README.md` - Automation system documentation
- `logs/standup-logs.txt` - Daily report outputs

**Status:** Fully operational and integrated with project workflow

AI & Automation:

Claude: Code review, backlog Q&A, automated sprint summaries.

n8n: Automated reminders, stand-up summaries, progress notifications in Line group.

Integration: Key artefacts and status updates are posted automatically to Line and updated in the Gantt dashboard for maximum team alignment.

🚦 How to Track Progress
Check the live Gantt chart for timeline status and task ownership.

Consult the GitHub Project Board for daily task status.

Review Resource MCPs for assignments, agent involvement, and capacity.

Get automatic updates in the team Line group (powered by n8n).

🛠️ Automation & Transparency
All major deadlines, sprint reviews, and blocker alerts are sent to the team Line group automatically.

The dashboard and documentation are updated weekly by PMO and automation agents.

Stakeholders can request a custom dashboard view or weekly summary at any time.

📄 Quick Links (Extended)
Gantt Chart Dashboard

Resource MCP Template (Drive)

Current Sprint MCP

Repo Setup Checklist

Where to Find What

Sprint Board (GitHub)

## Tech Stack

* **Frontend:** Next.js 15, TypeScript, Tailwind CSS
* **Backend/API:** Node.js 24+, Python 3.12+
* **DevOps:** Docker, Kubernetes, GitHub Actions
* **Databases:** PostgreSQL 17+, MongoDB 8+
* **AI/ML Integration:** Claude, Qwen (for Q\&A, analytics, automation)
* **Cloud:** Azure, AWS, On-premise (Minisforum fortress)
* **Monitoring:** Grafana, Prometheus

---

## Getting Started

### Prerequisites

* Node.js 18+ and npm 9+
* Docker & Docker Compose
* (Optional) Kubernetes & kubectl for orchestration
* Git (for source control)

### Installation

```bash
# Clone the repo
git clone https://github.com/iworkz/investor-website.git
cd investor-website

# Install dependencies
npm install

# Start local development server
npm run dev
```

*See [INSTALL.md](INSTALL.md) for detailed instructions.*

### Docker Quick Start

```bash
# Build and run using Docker Compose
docker-compose up --build
```

*See [DEPLOYMENT.md](DEPLOYMENT.md) for production setup, cloud migration, and environment variables.*

---

## Contributing

1. Fork the repo and create your branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -am 'Add some feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

All PRs must be reviewed by the PMO (Chattie) and the Lead Engineer (Claude). See [CONTRIBUTING.md](CONTRIBUTING.md) for our full guidelines.

---

## Project Management

* **Sprint planning, backlog, and progress are tracked in the GitHub Project Board.**
* **All major artefacts and documentation are cross-referenced in Google Drive (see Quick Links).**

### Team & Roles

| Name    | Role                       |
| ------- | -------------------------- |
| Carlos  | Owner, Strategic Direction |
| Chattie | PMO, Coordination, Docs    |
| Claude  | Lead Engineer & Developer  |
| Qwen    | Advisor, Devil’s Advocate  |

---

## Security & Compliance

* Follows OWASP Top 10 and industry best practices
* All data is encrypted in transit and at rest
* Security reviews before every release
* See [SECURITY.md](SECURITY.md) for more

---

## License

This repository and its contents are the intellectual property of iWORKZ and are not licensed for public or commercial reuse without express written consent.
All rights reserved.

---

## Contact

* [Project Artefacts & Docs (Google Drive)](https://drive.google.com/drive/folders/1rtNSzTJ9R56a58Fj_4Fs7d2b7bYCzZEe?usp=sharing)
* Email: [c-mundim@iworkz.ai](mailto:c-mundim@iworkz.ai)

---

*For a full list of documentation, see the [README & Docs folder](https://drive.google.com/drive/folders/1pd-YOaByjXqnrvtLSlUQncioJSXUAqqH?usp=drive_link) in Google Drive.*
