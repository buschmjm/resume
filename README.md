# Jacob Buschmann Resume

My resume, maintained as code and versioned like anything else I ship. Two single-column, ATS-friendly versions: one for DevOps and platform roles, one for AI engineering roles.

**Live site:** https://buschmjm.github.io/resume/
**LinkedIn:** https://www.linkedin.com/in/jacobmbuschmann

I work in platform and infrastructure engineering (Kubernetes, CI/CD) and build AI agent systems on top of it. If you landed here from an application, the live site is the current version, and the commit history is exactly what it looks like.

| File | Use |
|------|-----|
| [index.html](index.html) | DevOps / Platform Engineer resume |
| [ai-engineering.html](ai-engineering.html) | AI Engineer resume |
| [resume.css](resume.css) | Shared styles (screen + print) |
| [print.js](print.js) | Download menu that switches between the two versions |

No build step, no framework, no committed PDFs. The browser's print dialog is the release pipeline.

## Exporting a PDF

1. Open either page (or the live site) and click **Download PDF**.
2. Pick **DevOps / Platform Engineer** or **AI Engineer**. Choosing the other version opens that page and its print dialog.
3. Print settings: Destination **Save as PDF**, Headers and footers **Off**, Margins **Default**, Scale **100%**.

The single-column layout exists because ATS parsers read top to bottom and columns confuse them. After exporting, pasting the PDF text into a plain text editor should read Summary, then Experience, then Skills, in that order.

## Conventions

- The two versions tell the same facts in a different order and emphasis. A fact that changes (a title, a number, a date) changes in both files, same commit.
- Plain words over resume words. Numbers over adjectives.
- Claims stay current: anything retired, unshipped, or no longer true gets relabeled or removed.
- No em dashes or en dashes in body copy. Date ranges use "to", locations use commas.
