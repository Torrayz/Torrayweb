# TORRAY STUDENT — Student Workspace

A modern student-record workspace rebuilt from the original login and student table exercise.

## Features
- Dashboard overview: total students, active students, and programme counts.
- Student directory with create, read, update, and delete actions.
- Duplicate NIM validation.
- Search by NIM, student name, and email.
- Filter by study programme.
- Student status: Aktif, Cuti, Lulus.
- CSV export.
- Responsive workspace layout.
- Browser-local demo storage.

## Run locally
Requires Node.js 20.9+ and npm.
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Data and privacy
Current version stores demo records in the current browser's LocalStorage. Data is not shared between devices or users and is not suitable as an institutional production database. Do not enter real student personal data into the demo.

## Supabase
A connector and database plan will be enabled only after a dedicated project is selected. Production requires authenticated users, protected staff roles, institution-scoped RLS, audit timestamps, and least-privilege access. Never expose a service-role key in browser code.

## Roadmap
- [x] Modern dashboard and responsive navigation
- [x] Student CRUD and duplicate NIM validation
- [x] Search and programme filters
- [x] Status labels and CSV export
- [ ] Supabase Auth and role model
- [ ] Database migration and RLS verification
- [ ] CSV import with preview and validation
- [ ] Audit log and student profile detail
- [ ] Automated browser tests and accessibility audit

**Current status:** functional frontend demo. Authentication and cloud persistence are not enabled yet.
