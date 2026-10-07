# Jacob Buschmann Resume

My resume, maintained as code: one content source, two render targets, versioned like anything else I ship.

**Live site:** https://buschmjm.github.io/resume/
**LinkedIn:** https://www.linkedin.com/in/jacobmbuschmann

I work in platform and infrastructure engineering: Kubernetes, CI/CD, and AI infrastructure. If you landed here from an application, the live site is the current version, and the commit history is exactly what it looks like.

| File | Use |
|------|-----|
| [index.html](index.html) | Two-column layout for people |
| [resume-ats.html](resume-ats.html) | Single-column layout for applicant tracking systems |
| [resume.css](resume.css) | Shared styles (screen + print) |
| [print.js](print.js) | Print menu and layout switcher |

No build step, no framework, no committed PDFs. The browser's print dialog is the release pipeline.

## Exporting a PDF

1. Open either page (or the live site) and click **Print**.
2. Pick a layout from the menu. The dark header variant needs **Background graphics: On** in the print dialog.
3. Print settings: Destination **Save as PDF**, Headers and footers **Off**, Margins **Default**, Scale **100%**.

The single-column layout exists because ATS parsers read top to bottom and columns confuse them. After exporting it, pasting the PDF text into a plain text editor should read Summary, then Experience, then Skills, in that order.

## Conventions

- index.html and resume-ats.html carry identical content. Change one, change both, same commit.
- Plain words over resume words. Numbers over adjectives.
- Claims stay current: anything retired, unshipped, or no longer true gets relabeled or removed.
- No em dashes or en dashes in body copy. Date ranges use "to", locations use commas.
