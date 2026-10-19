# Workflow 1 frontend review

Implemented in the existing Laravel application using Blade, browser JavaScript modules and CSS. No build is necessary for these assets. Run `php artisan serve` in a PHP 8.2+ environment and open the printed URL.

## Coverage

- Landing page based on the supplied HRConnect reference, with responsive navigation, jobs, categories, illustrative statistics, benefits and signup actions.
- Demo account registration and explicit simulated email verification. Passwords are neither stored nor sent.
- Optional candidate experience and employee membership requests with admin approval/rejection.
- Company registration with proof filename and Super Admin approval/rejection.
- Approved-company job publishing with public/private visibility. Private jobs require approved membership in the matching company.
- Required CV validation (PDF/Word, up to 10 MB), application submission and duplicate prevention.
- Simulated AI matching, human shortlist/rejection, exam pass/fail, interview evaluation, offer creation and candidate accept/decline. Offer expiry can be simulated by HR.
- State transition guards, application history and browser-local persistence. Reset requires confirmation.

## Review updates / integration boundaries

1. This is a frontend prototype with a demo role switcher, not authenticated role access. Add backend authorization and company scoping before real use.
2. Uploads retain filenames only. Connect protected file storage, email verification, AI matching and notifications through backend APIs.
3. Detailed exam execution/proctoring and interview availability/booking belong to workflows 5 and 6. Workflow 1 records their outcomes only.
4. Distinguish declined and expired offers from rejection, even though the overview diagram converges these outcomes.
5. Confirm real statistics, screening failure handling, scheduling rules, offer terms and expiration behavior with the backend team.
6. Browser-local demo data is not shared across users or devices. Do not use sensitive documents or personal data.

## Manual acceptance walkthrough

Register → verify from Candidate → optionally save experience / request company membership → Company Admin registers company → Super Admin approves → Company Admin approves membership → publish public/private job → Candidate applies with a CV → HR runs match and shortlists → HR records exam pass → Interviewer records evaluation → HR creates offer → Candidate accepts. Repeat with fresh demo records for screening rejection, exam failure, final rejection, decline and expiry. Check private job exclusion before membership approval and visibility after approval.

## Verification performed

Executed `tests/workflow-smoke.js` against the actual JavaScript source with QuickJS and a minimal DOM stub: successful hiring path, rejection branches, declined/expired offers, invalid transition blocking, company-specific private visibility, text escaping, all page renders, all role workspaces and approved-company posting passed. This checks logic and template execution, not browser layout or DOM event integration.

PHP and Node executables were unavailable on PATH and the checked standard installation locations. Laravel server execution, PHP tests and real-browser visual verification remain unverified. Existing Vite scripts are preserved; the new page references public assets directly and does not require a Vite build.
