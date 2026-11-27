# Jacob Buschmann Resume

My resume, maintained as code and versioned like anything else I ship. There are three single column, ATS friendly versions: one for platform and DevOps roles, one for AI engineering roles, and one for systems administration and IT operations roles.

**Live resume site:** https://buschmjm.github.io/resume/
**Portfolio:** https://jbuschmann.com
**LinkedIn:** https://www.linkedin.com/in/jacobmbuschmann

The portfolio contains detailed project write ups and examples of my work. The resumes are shorter, targeted summaries for hiring teams.

| File | Use |
|------|-----|
| [index.html](index.html) | Platform and DevOps Engineer resume |
| [ai-engineering.html](ai-engineering.html) | AI Engineer resume |
| [systems-administration.html](systems-administration.html) | Systems Administrator resume |
| [resume.css](resume.css) | Shared screen and print styles |
| [print.js](print.js) | Download menu for all three resume versions |

No build step, no framework, no committed PDFs. The browser print dialog is the release pipeline.

## Exporting a PDF

1. Open any resume page and click **Download PDF**.
2. Pick **Platform and DevOps Engineer**, **AI Engineer** or **Systems Administrator**. Choosing another version opens that page and its print dialog.
3. Print settings: Destination **Save as PDF**, Headers and footers **Off**, Margins **Default**, Scale **100%**.

The single column layout is intentional. It keeps the reading order straightforward for applicant tracking systems. After exporting, copying the PDF text into a plain text editor should read Summary, Experience, Projects, Skills, Professional Development and Education in order.

## Conventions

- The three versions present the same work with different emphasis. Shared facts, dates and metrics should stay consistent.
- Use plain language and specific examples rather than resume jargon.
- Claims must reflect the current state of each project. Work in progress must be labeled clearly.
- Avoid em dashes and en dashes in resume copy. Use "to" for date ranges.
- Keep normal hyphens in compound words (in-house, self-hosted, 120-person).
