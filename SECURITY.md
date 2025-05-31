# SECURITY.md – iWORKZ Investor Website

Security is a core pillar of iWORKZ. We are committed to protecting our platform, our investors, and all users through robust technical and organisational controls. Please follow these best practices and reporting protocols to help keep iWORKZ safe.

---

## Security Best Practices

* **Data Encryption:** All data in transit and at rest is encrypted using industry-standard protocols (HTTPS, TLS 1.2+, AES-256).
* **No Secrets in Source:** Never commit passwords, API keys, or sensitive config to the repository. Use environment variables and secrets managers.
* **Access Control:** Repo and cloud environment access is strictly role-based. Review access rights regularly.
* **Dependency Management:** Run `npm audit` and similar tools regularly. Address vulnerabilities before deploying.
* **Security Updates:** Keep dependencies, containers, and OS images patched. Review Docker images with security scanners (`docker scan`, Trivy).
* **Authentication:** Use strong password policies and 2FA for all admin/investor logins.
* **CI/CD Secrets:** Use GitHub Secrets, AWS Secrets Manager, or Azure Key Vault for all pipeline and environment credentials.
* **Backups:** Databases and storage are backed up daily. Test restores quarterly.

---

## Incident Reporting

* **Immediate Response:** If you suspect a security issue or data breach, email [security@iworkz.ai](mailto:security@iworkz.ai) and the PMO (Chattie) immediately.
* **Public Disclosure:** Do not discuss vulnerabilities or incidents publicly until the issue is confirmed and patched.
* **GitHub Issues:** Never report security vulnerabilities in public Issues. Use email or secure chat only.

---

## Security Audits & Reviews

* All releases and major changes are reviewed by the PMO and Lead Engineer for security impact.
* Third-party security audits are performed annually or after major architectural changes.
* Results of audits are available to key stakeholders on request.

---

## Compliance

* The iWORKZ platform is designed to support compliance with GDPR, SOC 2, and local data protection laws.
* Privacy practices are disclosed in the public [Legal](LINK_TO_LEGAL_PAGE) section.

---

## Resources

* [DEPLOYMENT.md](./DEPLOYMENT.md)
* [CONTRIBUTING.md](./CONTRIBUTING.md)
* [Where to Find What (Google Drive)](ADD_LINK_ONCE_FILE_IS_UPLOADED)

---

For questions, security policy access, or to report a vulnerability, contact the PMO or email [security@iworkz.ai](mailto:security@iworkz.ai).
