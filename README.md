# TORRAY STUDENT — Student Workspace

A modern student-record workspace with a private academic planner.

## Features
- Supabase email/password authentication.
- Personal student profile with name, NIM, and study programme.
- Private student directory with CRUD operations.
- Duplicate NIM validation per account.
- Search by NIM, name, and email; programme filters.
- Student status: Aktif, Cuti, Lulus.
- CSV export.
- Academic task planner with status and optional course/deadline fields.
- Database-generated audit history for student-record changes.
- Responsive dashboard and motion-aware sign-in screen.

## Student profile and demo tasks
The signed-in account for the supplied profile is associated with the student profile for **Tri Puji Antoro**, NIM **221011402646**. Three sample task descriptions have been inserted with `is_demo=true`. Course names are intentionally left blank because no course list was supplied. The descriptions are explicitly illustrative examples, not real lecturer instructions or verified assignments.

Open the anonymized static UI preview at:
- [Student dashboard preview](https://torray-student.vercel.app/preview.html)

The preview masks the NIM and uses static demo content. The actual profile and task rows are visible only after signing in to the application.

## Technology
Vite, vanilla JavaScript ES modules, CSS, Supabase Auth, PostgreSQL, and Row Level Security.

## Run locally
Requires Node.js 20.9+ and npm.
```bash
npm install
npm run dev
npm run build
```

## Supabase
This app uses the shared `torray-workspace` project with a browser-safe publishable key. It never embeds a service-role or secret key.

Tables used:
- `student_records`: personal student directory, RLS by authenticated user.
- `student_profiles`: one profile per authenticated user, RLS by user ID.
- `academic_tasks`: task planner, RLS by user ID; demo records marked with `is_demo=true`.
- `student_audit_log`: database-generated change history for student records.

## Privacy
Student records and task rows are private to the authenticated account. The public preview contains a masked NIM and static examples only. Do not publish real student identifiers in screenshots or public preview pages.

## Roadmap
- [x] Modern dashboard and responsive navigation
- [x] Student CRUD, duplicate NIM validation
- [x] Search, programme filters, status, CSV export
- [x] Supabase Auth and per-user RLS
- [x] Student profile and academic task demo data
- [x] Anonymized static dashboard preview
- [ ] Task CRUD, course assignment, and deadline reminders
- [ ] CSV import with preview and validation
- [ ] E2E, accessibility, and cross-account RLS tests

**Current status:** connected frontend and database. Full task management and production QA remain in progress.
