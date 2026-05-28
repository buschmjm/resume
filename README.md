# Jacob Buschmann Resume

Platform / DevOps resume as static HTML. PDFs are exported from the browser (no committed PDF file).

| File | Use |
|------|-----|
| [index.html](index.html) | Live site, two-column layout for humans |
| [resume-ats.html](resume-ats.html) | Single-column layout for ATS portals (Workday, Taleo, iCIMS) |
| [resume.css](resume.css) | Shared styles (screen + print) |

**Live site:** https://buschmjm.github.io/resume/

**Project portfolio:** https://willowriverautomation.com

## Save as PDF

1. Open [index.html](index.html) or [resume-ats.html](resume-ats.html) (or the live site).
2. Click **Print**, then pick an option from the menu:
   - **Two-column (flat header)** or **Single-column (flat header)** — default; Background graphics off is fine.
   - **Dark header** — turn **Background graphics: On** in the print dialog.
   - **ATS single-column** (from the two-column page) or **Two-column version** (from the ATS page) — switches layout and opens the print menu on the other file.
3. In the print dialog:
   - **Destination:** Save as PDF
   - **Headers and footers:** Off
   - **Margins:** Default (matches CSS `@page` 0.6in)
   - **Scale:** 100%

For ATS portals, use **ATS single-column**, then save the PDF. Paste the text into Notepad once to confirm reading order (Summary → Experience → Skills → …).

## Editing content

When you change experience, skills, or summary, update **both** [index.html](index.html) and [resume-ats.html](resume-ats.html) so they stay in sync. Styles live in [resume.css](resume.css); print UI lives in [print.js](print.js).

Push to `main` to update GitHub Pages.

### Writing voice (resume copy)

- Lead with **verb + outcome**, then tools. Prefer: built, rebuilt, run, delivered, helped, cut, turned, finished. Avoid **own** unless you truly owned the whole system end to end.
- **One main idea per bullet** (at most one semicolon). Vary bullet openings in a section.
- Use plain words: “runs on GCP,” not repeated “shipped on GCP” everywhere.
- **Interview test:** every bullet must pass the 90-second drill below.
- **ATS:** keep product names in **Skills** and in at least one **bullet** with context.

**Avoid in body copy:** leveraged, spearheaded, robust, scalable, passionate, comfortable owning, human-in-the-loop, “Recent work includes” laundry lists, three parallel “Shipped X on GCP” templates, em dashes, en dashes.

### Platform / DevOps checklist

Before you publish a PDF:

1. **Multiplier scale** where you have it (hundreds of apps, 20+ endpoints, 100+ hours saved, private alpha).
2. **Tool in context** in bullets, not only in Skills (especially GCP services and Terraform).
3. **Metrics you can defend** in an interview; do not invent uptime or MTTR numbers.
4. Keywords from the JD mirrored in Summary and top Patron bullets when tailoring.

### Dash style (resume copy)

- Use **to** for date ranges: `July 2022 to October 2025`, not spaced hyphens.
- Use **commas** for locations and education: `Patron Points Inc, Woodbury, MN`, `Technical Diploma, IT, Software Development Specialist`.
- Keep hyphens in **phone numbers** (`760-718-9504`) and **compound terms** (`on-prem`, `white-label`, `LDAP-gated`).
- Do not use em dashes or en dashes in resume body copy.

### Willow River / contract section

**Contract Work & Projects** describes real products at [willowriverautomation.com](https://willowriverautomation.com): **MoveAnchor** (`moving-crm`), **Intake Relay** (`intake-relay`), and the marketing site (Vue + Netlify). Both products are **live on GCP**; skills should list the services you actually use (see repos’ `terraform/` and `cloudbuild.yaml`).

| Product | GCP (production) | Front door |
|---------|------------------|------------|
| MoveAnchor | Cloud Run (API + UI), Cloud SQL, Artifact Registry, Cloud Build, Terraform, Cloud Tasks, Cloud Scheduler, Secret Manager | App on Cloud Run; alpha via WRA site |
| Intake Relay | Cloud Run API, Cloud Run jobs (webhook worker, janitor, migrate), Cloud SQL, GCS, Terraform, Cloud Build, monitoring alerts | `willowriverautomation.com/relay/*` (Netlify proxy) |
| WRA site | Netlify (static site + Functions; PostHog on frontend) | Contact function → Intake Relay + SendGrid + Slack |

**Skills:** list **PostHog** and **SendGrid** under Data, APIs & observability (WRA site + MoveAnchor use PostHog; WRA contact and Intake Relay use SendGrid).

Do not call the site “case studies” or “writeups”.

**AI tooling** stays in **Skills** and one contract bullet (Open WebUI, Ollama, Cursor, Copilot). It is how you build side/contract work, not a separate product on the site. Do not add Patron bullets for LLM systems unless you did that work there.

## Target roles

- Platform Engineer
- Senior DevOps Engineer
- Infrastructure Engineer (hands-on)
- Internal Tools / Developer Productivity Engineer

For leadership-heavy postings, add one summary line about roadmap ownership; keep bullets technical.

## Tailoring cheat sheet (per job posting)

Use this for each application. Copy the JD into a doc and check off items.

### 1. Pick the right PDF

| Where you apply | What to export |
|-----------------|----------------|
| Workday, Taleo, iCIMS, Greenhouse upload | [resume-ats.html](resume-ats.html) → Print → **Single-column (flat header)** |
| Email, recruiter, hiring manager | [index.html](index.html) → Print → **Two-column (flat header)** |
| Branded PDF request | Either layout → **dark header** + Background graphics on |

### 2. Mirror title and level

- If the JD says **Platform Engineer**, add that phrase once in **Professional Summary** (headline already says Platform & DevOps Engineer).
- If the JD says **DevOps Engineer**, emphasize CI/CD pipeline and IaC in the top Patron bullet.
- Keep your **employer job title** accurate in Experience; do not rename the Patron role on the resume.

### 3. Pull 10 to 15 keywords from the JD

Common mid-level Platform / DevOps terms to match when the JD uses them:

- Kubernetes, Docker, Terraform, **Infrastructure as Code (IaC)**
- **CI/CD pipeline**, GitHub Actions, Azure DevOps
- AWS, Azure, **GCP**
- internal platform, self-service, developer experience (if the role is platform-shaped)
- Grafana, monitoring, alerting
- Python, automation

Put each term in **Skills** and at least one **Patron** or **contract** bullet with context.

### 4. What not to add without real work

- Backstage, ArgoCD, Helm, GitOps, Prometheus (unless you used them)
- SLO, MTTR, error budgets (unless you can defend numbers)
- “Owned entire infrastructure” when you worked on a team

### 5. Short tenure at Patron (phone screen)

Recruiters may ask why the role is new. One honest line: hired to stand up mobile CI/CD and internal platform work; shipped pipeline, K8s control plane, monitoring, and internal tools in the first months.

## Certifications (optional, boosts ATS)

Not required for every role. Good fit for your stack:

| Cert | Why |
|------|-----|
| [Google Associate Cloud Engineer](https://cloud.google.com/certification/cloud-engineer) | Matches GCP work (Patron Firebase/GCP, MoveAnchor, Intake Relay) |
| [HashiCorp Terraform Associate](https://developer.hashicorp.com/certifications/infrastructure-automation) | Matches Terraform on WRA products |
| CKA / CKAD | Only if you want to lean harder into Kubernetes-heavy roles |

Add a **Certifications** section to both HTML files only after you pass an exam.

## LinkedIn alignment

Keep [LinkedIn](https://www.linkedin.com/in/jacobmbuschmann) consistent with the resume:

- **Headline (market title):** Platform & DevOps Engineer | Internal platforms, K8s, CI/CD, hybrid infra
- **About:** Same story as Professional Summary (self-service internal release platform, hundreds of apps, GCP side products).
- **Experience:** Patron bullets can mirror resume; employer title stays as listed at Patron.
- **Featured:** Link to https://buschmjm.github.io/resume/ and https://willowriverautomation.com

Suggested headline options:

1. Platform & DevOps Engineer | K8s mobile release platform, CI/CD, hybrid infra
2. Platform Engineer | Internal CI/CD, Terraform, GCP | Patron Points
3. DevOps / Platform Engineer | Kubernetes, Azure DevOps, automation, observability

## Before you apply

**90-second bullet drill:** Someone picks any experience bullet at random; you explain tools, constraints, and outcomes without reading the resume.

**ATS text check:** Copy all text from your PDF into Notepad. If experience reads in order (not jumbled with skills), the layout is safe.

---

Contact: buschmann.jake@gmail.com
