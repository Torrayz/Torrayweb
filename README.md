# TORRAY STUDENT — Student Workspace

A modern student-record workspace rebuilt from the original login and student table exercise.

## Features
- Supabase email/password sign-in and account registration.
- Private student directory backed by PostgreSQL.
- Create, edit, and delete student records.
- Duplicate NIM validation per account.
- Search by NIM, name, and email.
- Filter by study programme.
- Student status: Aktif, Cuti, Lulus.
- CSV export.
- Automatic database audit history for record changes.
- Responsive workspace dashboard.

## Technology
Vite, vanilla JavaScript ES modules, CSS, Supabase Auth, PostgreSQL and Row Level Security.

## Run locally
Requires Node.js 20.9+ and npm.
```bash
npm install
npm run dev
npm run build
```

## Supabase connection
This app connects to the shared `torray-workspace` project using its public publishable key. The browser never receives a service-role or secret key.

The `student_records` table is protected by RLS: each authenticated user can read and change only rows whose `user_id` matches their Supabase Auth user ID. NIM uniqueness is enforced per account by a database constraint. Changes are recorded in `student_audit_log`.

## Important privacy note
This is a personal workspace model, not yet an institution-wide shared register. Do not upload real student records until the intended institutional access model, privacy obligations, retention, and backup policy have been reviewed.

## Database
The shared schema is maintained in the MADURA STORE repository under `supabase/migrations/`. Applied migrations:
- `001_madura_store_base`
- `002_shared_apps_students_and_security`

## Roadmap
- [x] Modern dashboard and responsive navigation
- [x] Student CRUD and duplicate NIM validation
- [x] Search, programme filters, status, CSV export
- [x] Supabase Auth and per-user RLS
- [x] Database audit trigger
- [ ] Import CSV with preview and validation
- [ ] Student detail view and pagination
- [ ] Browser E2E, accessibility and cross-account RLS tests

**Current status:** connected frontend and database. Production readiness still requires E2E and security verification.
