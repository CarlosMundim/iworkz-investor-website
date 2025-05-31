# API.md – iWORKZ Investor Website

This document serves as the living reference for all API endpoints, authentication, and integration notes for the iWORKZ Investor Website platform. Expand this doc as new endpoints and features are added.

---

## Table of Contents

* Overview
* Authentication
* Endpoints
* Error Handling
* Versioning
* References

---

## Overview

The iWORKZ API powers frontend features, investor dashboards, AI assistants, and integrations with cloud and third-party tools. All endpoints are RESTful and JSON-based unless otherwise noted.

---

## Authentication

* All endpoints require authentication (JWT, OAuth2, or API key—TBD per environment).
* Use HTTPS for all requests.
* Never expose credentials or tokens in client-side code.

---

## Endpoints (Sample Structure)

### GET /api/investors

* **Description:** Returns list of active investors and their key data
* **Auth:** Required
* **Query Params:** `status`, `country`, `limit`
* **Response:**

```json
{
  "investors": [
    { "id": "string", "name": "string", "country": "string", "kpi": { ... } },
    ...
  ]
}
```

### POST /api/investors

* **Description:** Create a new investor profile
* **Auth:** Required
* **Body:**

```json
{
  "name": "string",
  "country": "string",
  "email": "string"
}
```

* **Response:** 201 Created, investor object

### Other Endpoints

*Add descriptions for jobs, reports, AI chat, etc. as you build the backend.*

---

## Error Handling

* Use standard HTTP status codes (200, 201, 400, 401, 404, 500)
* All errors returned as JSON objects:

```json
{
  "error": "Invalid request",
  "code": 400,
  "details": "Field 'name' is required."
}
```

---

## Versioning

* Use semantic versioning for all API releases (v1, v1.1, etc.)
* Document breaking changes and deprecations

---

## References

* [DEPLOYMENT.md](./DEPLOYMENT.md)
* [Where to Find What (Google Drive)](ADD_LINK_ONCE_FILE_IS_UPLOADED)

---

*Expand this doc with new endpoints, authentication flows, and integration guides as the platform evolves.*
