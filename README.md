# Jacob Buschmann Resume

Technical program management / IT operations resume as static HTML. PDFs are exported from the browser (no committed PDF file).

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

### TPM / IT operations checklist

Before you publish a PDF:

1. **Multiplier scale** where you have it (hundreds of apps, $120K vendor spend, 100+ hours saved, team of 5+).
2. **Tool in context** in bullets, not only in Core Competencies (especially CRM migrations, CI/CD, and cloud platforms).
3. **Metrics you can defend** in an interview; do not invent uptime or budget numbers.
4. Keywords from the JD mirrored in Summary and top Patron bullets when tailoring.

### Dash style (resume copy)

- Use **to** for date ranges: `July 2022 to October 2025`, not spaced hyphens.
- Use **commas** for locations and education: `Patron Points Inc, Woodbury, MN`, `Technical Diploma, IT, Software Development Specialist`.
- Keep hyphens in **phone numbers** (`760-718-9504`) and **compound terms** (`on-prem`, `white-label`, `LDAP-gated`).
- Do not use em dashes or en dashes in resume body copy.

### Selected Independent Work section

**Selected Independent Work** describes real products at [willowriverautomation.com](https://willowriverautomation.com): a multi-tenant CRM and a headless intake API, both live on Google Cloud. Keep the section focused on product lifecycle ownership (requirements through billing), not a laundry list of GCP services.

Do not call the site “case studies” or “writeups”.

## Target roles

- Technical Program Manager
- IT Operations Manager
- Business Systems Manager / Lead
- Technical Project Manager (infrastructure or platform programs)
- Platform / DevOps Engineer (when the role is delivery-heavy and hands-on)

For pure engineering postings, emphasize CI/CD migration, release platform, and technical foundation bullets. For TPM postings, lead with stakeholder alignment, vendor coordination, and program delivery.

## Tailoring cheat sheet (per job posting)

Use this for each application. Copy the JD into a doc and check off items.

### 1. Pick the right PDF

| Where you apply | What to export |
|-----------------|----------------|
| Workday, Taleo, iCIMS, Greenhouse upload | [resume-ats.html](resume-ats.html) → Print → **Single-column (flat header)** |
| Email, recruiter, hiring manager | [index.html](index.html) → Print → **Two-column (flat header)** |
| Branded PDF request | Either layout → **dark header** + Background graphics on |

### 2. Mirror title and level

- If the JD says **Technical Program Manager**, add that phrase once in **Professional Summary** (headline already includes Technical Program Management).
- If the JD says **IT Operations** or **Business Systems**, emphasize vendor management, CRM migration, and cross-functional delivery in Matt's Moving and Patron bullets.
- Keep your **employer job title** accurate in Experience; do not rename the Patron role on the resume.

### 3. Pull 10 to 15 keywords from the JD

Common TPM / IT operations terms to match when the JD uses them:

- program delivery, stakeholder management, requirements gathering, vendor management
- CRM migration, business systems, workflow automation, process improvement
- **CI/CD**, platform migration, cross-functional coordination
- Kubernetes, Azure, **GCP**, Firebase
- Microsoft 365, Google Workspace, Active Directory
- Python, REST APIs, monitoring and alerting

Put each term in **Core Competencies** and at least one **experience** bullet with context.

### 4. What not to add without real work

- Backstage, ArgoCD, Helm, GitOps, Prometheus (unless you used them)
- SLO, MTTR, error budgets (unless you can defend numbers)
- “Owned entire infrastructure” when you worked on a team

### 5. Short tenure at Patron (phone screen)

Recruiters may ask why the role is new. One honest line: hired to own platform delivery for a multi-tenant mobile platform; leading CI/CD migration, self-service release platform, and cross-team operational coordination in the first months.

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

- **Headline (market title):** Technical Program Management | IT Operations | Business Systems Leadership
- **About:** Same story as Professional Summary (CI/CD migration, vendor coordination, cross-functional delivery, GCP side products).
- **Experience:** Patron bullets can mirror resume; employer title stays as listed at Patron.
- **Featured:** Link to https://buschmjm.github.io/resume/ and https://willowriverautomation.com

Suggested headline options:

1. Technical Program Manager | CI/CD platform migration, business systems, IT operations
2. IT Operations & Business Systems Leader | CRM migrations, vendor management, platform delivery
3. Technical Program Management | Cross-functional delivery, Azure DevOps to GitHub, GCP products

## Before you apply

**90-second bullet drill:** Someone picks any experience bullet at random; you explain tools, constraints, and outcomes without reading the resume.

**ATS text check:** Copy all text from your PDF into Notepad. If experience reads in order (not jumbled with skills), the layout is safe.

---

Contact: buschmann.jake@gmail.com
