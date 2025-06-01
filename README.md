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

# iWORKZ Investor Website

**Enterprise-grade investor portal for iWORKZ workforce mobility platform**

> Luxury technology meets AI innovation - Built for the ¥12 trillion workforce mobility market

---

## 🚀 Project Status

### Current Development Phase: **ACTIVE ENHANCEMENT**
- ✅ **Hero Component**: Enterprise-grade with luxury animations, interactive carousel, rotating text
- 🔄 **In Progress**: Footer, Header, StatCard components 
- 📋 **Pipeline**: 9 additional homepage components for enhancement

### Live Deployment
- **Production**: [http://iworkz.ai](http://iworkz.ai) (Vercel)
- **Repository**: `CarlosMundim/iworkz-investor-website`

---

## 🏗️ Architecture

### Technology Stack
- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **Animations**: Framer Motion (luxury effects)
- **Images**: Next.js Image Optimization
- **Icons**: Lucide React
- **Deployment**: Vercel (auto-deploy from main branch)

### Design System
```css
Brand Colors:
- darkBlue: #0a1829    (primary backgrounds)
- midBlue: #0c2d56     (secondary backgrounds) 
- accentRed: #E63946   (CTAs, highlights)
- accentTeal: #27B3B1  (accents, interactive)
- accentBlue: #A8DADC  (text highlights)
- silver: #E5E9F0      (premium text)
```

---

## 📁 Project Structure

```
iworkz-investor-website/
├── src/
│   ├── components/
│   │   └── homepage/
│   │       ├── HeroTop.tsx          ✅ ENHANCED
│   │       ├── HomepageCTA.tsx      📋 Queued  
│   │       ├── ImageCarousel.tsx    📋 Queued
│   │       ├── ImpactMetrics.tsx    📋 Queued
│   │       ├── InvestorsSection.tsx 📋 Queued
│   │       ├── RotatingText.tsx     📋 Queued
│   │       ├── Solutions.tsx        📋 Queued
│   │       ├── SolutionsBento.tsx   📋 Queued
│   │       ├── WhoWeServe.tsx       📋 Queued
│   │       └── WhyPartner.tsx       📋 Queued
│   ├── pages/
│   ├── styles/
│   └── utils/
├── docs/                            📚 Documentation
├── public/
│   └── homepage/                    🖼️ Hero carousel images
├── DEVELOPMENT_LOG.md               📋 Session progress
├── NEXT_SESSION.md                  🔄 Handoff documentation
└── package.json
```

---

## 🛠️ Development Setup

### Prerequisites
- **Node.js**: v18+ (Recommended: v20.19.2)
- **npm**: v10+ (Recommended: v11.3.0)
- **Environment**: Ubuntu/WSL2 (for Claude Code integration)

### Local Development Setup

#### 1. Environment Setup (Ubuntu/WSL2)
```bash
# Install Node.js LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Configure npm for global packages
mkdir -p ~/.npm-global
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

#### 2. Clone Repository
```bash
# Navigate to development directory
cd /mnt/c/iworkz-dev

# Clone repository
git clone https://github.com/CarlosMundim/iworkz-investor-website.git
cd iworkz-investor-website
```

#### 3. Install Dependencies
```bash
npm install
```

#### 4. Development Server
```bash
npm run dev
# Opens on http://localhost:3000
```

### Claude Code Integration (Recommended)
```bash
# Install Claude Code for AI-assisted development
npm install -g @anthropic-ai/claude-code

# Start Claude Code in project directory
claude
# Follow OAuth authentication setup
```

---

## 🎯 Component Library

### Enhanced Components ✅
- **HeroTop.tsx**: Enterprise-grade hero with interactive carousel, rotating text, luxury animations

### Ready for Enhancement 📋
- **Footer**: Available in Google Drive workspace
- **Header**: Available in Google Drive workspace  
- **StatCard**: Available in Google Drive workspace

### Existing Components (Review Needed)
- HomepageCTA, ImageCarousel, ImpactMetrics, InvestorsSection
- RotatingText, Solutions, SolutionsBento, WhoWeServe, WhyPartner

---

## 💎 Quality Standards

### Code Quality
- **TypeScript**: Strict typing with interfaces
- **Components**: Functional components with hooks
- **Performance**: Optimized images, efficient animations
- **Accessibility**: ARIA labels, semantic HTML
- **Mobile-First**: Responsive design principles

### Design Quality  
- **Luxury Aesthetics**: Premium animations and effects
- **Brand Consistency**: Aligned color palette and typography
- **User Experience**: Smooth interactions and transitions
- **Professional Grade**: Investment-ready presentation

---

## 🚀 Deployment

### Automatic Deployment
- **Platform**: Vercel
- **Trigger**: Push to `main` branch
- **URL**: [http://iworkz.ai](http://iworkz.ai)
- **Build Command**: `npm run build`

### Manual Deployment
```bash
# Build for production
npm run build

# Deploy via Vercel CLI (if needed)
npx vercel --prod
```

---

## 📊 Development Workflow

### Three-Way Collaboration Model
1. **Carlos Mundim**: Vision, business requirements, final approval
2. **Claude AI**: Strategic architecture, component polishing, code review
3. **Claude Code**: File editing, deployment, technical implementation

### Component Enhancement Process
1. **Source**: Fetch component from Google Drive workspace
2. **Polish**: Apply design system, TypeScript, animations
3. **Deploy**: Use Claude Code for file replacement
4. **Test**: Verify integration and functionality
5. **Document**: Update progress logs

### Quality Checklist
- [ ] TypeScript interfaces implemented
- [ ] Brand colors and typography applied
- [ ] Luxury animations added (Framer Motion)
- [ ] Mobile responsiveness verified
- [ ] Accessibility attributes included
- [ ] Performance optimizations applied
- [ ] Code documentation complete

---

## 📋 Current Sprint

### Completed This Session (June 1, 2025)
- ✅ Development environment setup (Ubuntu WSL2 + Node.js + Claude Code)
- ✅ Hero component enhancement with enterprise-grade features
- ✅ Component architecture analysis (54 files, 10 homepage components)
- ✅ Documentation system establishment

### Next Session Priorities
1. **Footer Component** enhancement (Google Drive → Repository)
2. **Header Component** enhancement (Google Drive → Repository)  
3. **StatCard Component** enhancement (Google Drive → Repository)
4. **Existing Components** review and enhancement planning

### Success Metrics
- **Velocity**: 3-4 components enhanced per session
- **Quality**: Enterprise-grade TypeScript and design
- **Performance**: Fast loading, smooth animations
- **Mobile**: Perfect responsive experience

---

## 🎭 Project Context

### Business Objectives
- **Market**: ¥12 trillion workforce mobility opportunity in Japan/Asia
- **Platform**: AI-powered workforce management and compliance
- **Audience**: Investors, enterprise clients, talent partners
- **Goal**: Professional investor portal for funding rounds

### Technical Excellence
- **Architecture**: Scalable Next.js with TypeScript
- **Design**: Luxury brand aesthetics with premium animations  
- **Performance**: Optimized for speed and engagement
- **Maintenance**: Well-documented, easily extensible

---

## 🔧 Troubleshooting

### Common Issues
- **Node.js Version**: Ensure v18+ (recommended v20.19.2)
- **npm Permissions**: Use user-level global packages configuration
- **Claude Code Auth**: Re-run `claude` if authentication expires
- **WSL Path Issues**: Ensure using Linux Node.js, not Windows

### Support
- **Documentation**: See `DEVELOPMENT_LOG.md` and `NEXT_SESSION.md`
- **Repository Issues**: Check GitHub Issues tab
- **Development Questions**: Contact Carlos Mundim

---

## 📈 Progress Tracking

### Development Velocity
- **Session 1 (June 1, 2025)**: Environment + Hero component ✅
- **Session 2 (Planned)**: Footer + Header + StatCard components
- **Session 3 (Planned)**: Remaining component enhancements
- **Session 4 (Planned)**: Integration testing + deployment optimization

### Quality Metrics
- **Code Coverage**: TypeScript strict mode compliance
- **Performance**: Lighthouse scores optimization
- **Accessibility**: WCAG 2.1 AA compliance
- **Mobile**: Perfect responsive experience

---

## 🌟 Contributing

### Development Team
- **Carlos Mundim**: Project Lead, Vision, Business Requirements
- **Claude AI**: Strategic Advisor, Architecture, Component Design
- **Claude Code**: Development Agent, File Management, Deployment

### Code Standards
- Follow established TypeScript interfaces
- Maintain luxury design system consistency  
- Ensure mobile-first responsive design
- Include comprehensive accessibility features
- Document all major changes

---

## 📄 License

**Proprietary** - iWORKZ Enterprise Platform  
© 2025 Carlos Mundim. All rights reserved.

---

**🚀 Building the future of workforce mobility with luxury technology and AI innovation**

*Last Updated: June 1, 2025 - Active Development Session*

## License

This repository and its contents are the intellectual property of iWORKZ and are not licensed for public or commercial reuse without express written consent.
All rights reserved.

---

## Contact

* [Project Artefacts & Docs (Google Drive)](https://drive.google.com/drive/folders/1rtNSzTJ9R56a58Fj_4Fs7d2b7bYCzZEe?usp=sharing)
* Email: [c-mundim@iworkz.ai](mailto:c-mundim@iworkz.ai)

---

*For a full list of documentation, see the [README & Docs folder](https://drive.google.com/drive/folders/1pd-YOaByjXqnrvtLSlUQncioJSXUAqqH?usp=drive_link) in Google Drive.*
