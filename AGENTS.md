# SinLess Games Repository Instructions

## 1. Repository Identity

This repository contains the SinLess Games public website, shared frontend
components, end-to-end tests, supporting Cloudflare services, documentation,
deployment configuration, and repository-level tooling.

Repository:

- GitHub: `SinLess-Games/sinlessgames.com`
- Default branch: `master`
- Primary production website: `sinlessgames.com`
- Monorepo system: Nx
- Package manager: pnpm

The repository is relatively compact. Inspect the existing implementation before
introducing new architecture.

Do not assume complexity that does not exist.

Prefer extending existing structures over creating unnecessary new layers.

---

# 2. Repository Structure

The current high-level repository structure is:

```text
.
├── AGENTS.md
├── apps
│   ├── cdn
│   ├── sinlessgames-ui
│   └── sinlessgames-ui-e2e
├── Docs
├── libs
│   └── react-components
├── jest.config.ts
├── jest.preset.js
├── nx.json
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── README.md
├── taskfile.yaml
├── tsconfig.base.json
├── vercel.json
└── vitest.workspace.ts
```

The repository may also contain hidden project configuration such as `.codex/`.

Do not assume `tree` output includes hidden files.

---

# 3. Primary Nx Projects

## `sinlessgames-ui`

Location:

```text
apps/sinlessgames-ui
```

Purpose:

- main SinLess Games website
- primary production frontend
- Next.js application
- React application
- public marketing/studio/game website
- deployed through Vercel

Important files include:

```text
apps/sinlessgames-ui/
├── Dockerfile
├── jest.config.ts
├── next.config.js
├── project.json
├── public/
├── specs/
├── src/
├── tsconfig.json
└── tsconfig.spec.json
```

This is the default project for public-facing website work unless the task
clearly belongs elsewhere.

---

## `sinlessgames-ui-e2e`

Location:

```text
apps/sinlessgames-ui-e2e
```

Purpose:

- Cypress end-to-end tests
- browser-level regression coverage for `sinlessgames-ui`

Important locations:

```text
apps/sinlessgames-ui-e2e/
├── cypress.config.ts
├── project.json
└── src
    ├── e2e
    ├── fixtures
    └── support
```

Existing E2E tests include:

```text
src/e2e/about.cy.ts
src/e2e/app.cy.ts
```

When changing a major user journey, navigation behavior, or page-level
interaction, evaluate whether Cypress coverage should be added or updated.

---

## `cdn`

Location:

```text
apps/cdn
```

Purpose:

- Cloudflare-backed application/service
- Wrangler-based deployment
- Vite/Vitest tooling

Important files include:

```text
apps/cdn/
├── package.json
├── project.json
├── src
│   ├── assets
│   ├── index.test.ts
│   └── index.ts
├── vite.config.ts
├── vitest.config.ts
└── wrangler.toml
```

Treat Cloudflare runtime constraints as authoritative for this application.

Do not introduce Node-specific runtime APIs into Worker code unless the
Cloudflare configuration explicitly supports them.

Do not deploy the CDN application to production unless explicitly requested.

---

## `react-components`

Location:

```text
libs/react-components
```

Purpose:

- shared React components
- reusable frontend infrastructure

Current structure includes:

```text
libs/react-components/src/
├── index.ts
└── Navigation
    ├── AppBar.tsx
    └── index.ts
```

Only place a component here when it is genuinely reusable across multiple
features, routes, or applications.

Do not move app-specific components into this library merely because they are
React components.

---

# 4. Main Frontend Source Layout

The primary frontend source is:

```text
apps/sinlessgames-ui/src
```

Current structure:

```text
src/
├── app
│   ├── About
│   │   └── page.tsx
│   ├── api
│   │   └── hello
│   │       └── route.ts
│   ├── Contact
│   │   └── page.tsx
│   ├── global.scss
│   ├── layout.tsx
│   ├── lib
│   │   └── registry.tsx
│   ├── page.tsx
│   └── Services
│       └── page.tsx
├── components
│   ├── background.tsx
│   ├── Home
│   │   ├── card.module.scss
│   │   ├── card.tsx
│   │   └── index.ts
│   └── reusable-components
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── coloredLine.module.scss
│       └── coloredLine.tsx
├── instrumentation.ts
└── variables
    ├── About
    │   └── cards.ts
    ├── Contact
    │   └── cards.ts
    ├── Home
    │   └── carousel.ts
    ├── MainNavbar
    │   └── pages.ts
    ├── README.md
    └── Services
        └── cards.ts
```

Understand this structure before adding new folders.

---

# 5. Next.js App Router

The frontend uses the Next.js App Router.

Important files:

```text
apps/sinlessgames-ui/src/app/layout.tsx
apps/sinlessgames-ui/src/app/page.tsx
apps/sinlessgames-ui/src/app/global.scss
```

Before modifying:

- global metadata
- fonts
- navigation providers
- analytics
- observability
- theme providers
- global styles
- layout structure

inspect `layout.tsx`, `global.scss`, and relevant providers first.

Do not introduce a second root-level provider architecture without a clear need.

---

# 6. Existing Route Naming

Existing route directories currently include capitalized names:

```text
About
Contact
Services
```

Do not silently rename these directories merely to enforce a preferred naming
style.

Changing route directory casing can alter public URLs, filesystem behavior,
tests, navigation links, or deployment behavior.

If route normalization is desired, treat it as an intentional migration and
update all affected references and tests.

---

# 7. Existing Frontend Components

Application-specific components currently live under:

```text
apps/sinlessgames-ui/src/components
```

Current component groupings include:

```text
components/Home
components/reusable-components
```

Before adding a component:

1. search for an existing equivalent;
2. inspect `apps/sinlessgames-ui/src/components`;
3. inspect `libs/react-components`;
4. inspect neighboring page implementations;
5. decide whether the component is app-specific or genuinely shared.

Prefer:

```text
apps/sinlessgames-ui/src/components
```

for components tied specifically to this website.

Prefer:

```text
libs/react-components
```

for components with clear cross-feature or cross-application reuse.

Do not prematurely generalize components.

---

# 8. Existing Data / Content Variables

The application currently separates some static page data into:

```text
apps/sinlessgames-ui/src/variables
```

Existing groupings include:

```text
variables/About/cards.ts
variables/Contact/cards.ts
variables/Home/carousel.ts
variables/MainNavbar/pages.ts
variables/Services/cards.ts
```

Before embedding large static arrays directly inside page components, inspect
whether the existing `variables` pattern is appropriate.

Continue established patterns where they remain useful.

Do not force all content into `variables` if colocating data produces a clearer
implementation.

---

# 9. Navigation

Navigation-related data currently exists under:

```text
apps/sinlessgames-ui/src/variables/MainNavbar/pages.ts
```

Shared navigation components also exist under:

```text
libs/react-components/src/Navigation
```

Before changing navigation:

1. inspect current route definitions;
2. inspect `MainNavbar/pages.ts`;
3. inspect the shared `Navigation/AppBar.tsx`;
4. inspect mobile behavior;
5. inspect existing E2E coverage;
6. preserve existing destinations unless the task requires route changes.

Do not solve a visual navigation issue by changing URL architecture unless
necessary.

---

# 10. Public Assets

Primary production website assets currently live under:

```text
apps/sinlessgames-ui/public
```

Existing SinLess Games assets include:

```text
public/images/sinless-games-logo.png
public/images/sinless-games-logo.webp
public/images/sinless-games-mark.png
public/images/sinless-games-mark.webp
```

Use these approved assets where appropriate.

Before generating or introducing replacement branding assets, inspect these
files first.

Do not recreate the SinLess Games logo using CSS, SVG approximations, or text
when an approved asset already exists.

Prefer WebP where appropriate, while retaining formats required for compatibility
or specific use cases.

---

# 11. Documentation Assets

Additional historical/reference assets exist under:

```text
Docs/images
```

Examples include:

```text
Docs/images/galaxy_planets.webp
Docs/images/logos/sinless-games/
Docs/images/logos/helix/
```

Treat `apps/sinlessgames-ui/public` as the primary source for production website
assets.

Treat `Docs/images` primarily as documentation/reference material unless the
task explicitly uses those assets.

Do not automatically expose documentation assets publicly.

---

# 12. Documentation

Repository documentation lives under:

```text
Docs/
```

Current documentation categories include:

```text
Docs/API
Docs/FAQ
Docs/Guides
Docs/Resources
Docs/NX.md
Docs/README.md
```

Update documentation when a task materially changes:

- developer setup
- architecture
- build behavior
- deployment
- APIs
- operational procedures
- configuration
- public workflows

Do not create documentation merely to describe obvious implementation details.

---

# 13. Toolchain

Use repository-defined tooling and versions.

Current important versions include:

- Node.js: 22 in CI
- pnpm: exact version declared by `packageManager` in `package.json`
- Nx: 20.8.4
- Next.js: 15.x
- React: 18.x
- TypeScript: 5.7.x

Always use pnpm.

Do not use:

```text
npm install
yarn
bun
```

unless explicitly asked to migrate package managers.

---

# 14. Local Node Version vs CI

The developer workstation may currently run a newer Node version than CI.

For example, the local shell may report:

```text
Node.js 26.5.0
```

while repository CI currently uses:

```text
Node.js 22
```

Treat CI Node 22 as the compatibility baseline.

A successful build under Node 26 does not prove the code will pass CI.

When compatibility matters, validate using Node 22.

Do not change the repository's supported Node version merely because the local
machine happens to have a newer version installed.

---

# 15. pnpm

The workspace is defined by:

```text
pnpm-workspace.yaml
```

Workspace packages include:

```text
apps/*
libs/*
```

Install dependencies with:

```bash
pnpm install --frozen-lockfile
```

Do not regenerate `pnpm-lock.yaml` unless dependency changes require it.

Before adding a dependency:

1. inspect existing dependencies;
2. determine whether an installed package already solves the problem;
3. prefer native framework capabilities when reasonable;
4. consider bundle impact for frontend dependencies;
5. explain why the dependency is necessary.

Do not replace established dependencies merely because another library is
personally preferred.

---

# 16. Nx

Treat Nx configuration as authoritative.

Important files:

```text
nx.json
project.json files
pnpm-workspace.yaml
tsconfig.base.json
```

Before running or assuming a project target, inspect it:

```bash
pnpm exec nx show projects
pnpm exec nx show project sinlessgames-ui
pnpm exec nx show project sinlessgames-ui-e2e
pnpm exec nx show project cdn
```

Use:

```bash
pnpm exec nx show project <project>
```

when uncertain about available targets.

Do not invent Nx target names from memory.

Prefer Nx targets over directly invoking framework tools when Nx already
provides the appropriate target.

---

# 17. Development

For frontend development, determine the Nx-provided development target first:

```bash
pnpm exec nx show project sinlessgames-ui
```

Use the project-defined target.

Do not assume `serve`, `dev`, or another target name without checking.

For Cloudflare development, inspect:

```bash
pnpm exec nx show project cdn
```

The CDN currently defines a Cloudflare-oriented serve target.

---

# 18. Existing Tests

Frontend component/page tests currently exist under:

```text
apps/sinlessgames-ui/specs
```

Current examples include:

```text
about.spec.tsx
contact.spec.tsx
index.spec.tsx
Services.spec.tsx
```

E2E tests live under:

```text
apps/sinlessgames-ui-e2e/src/e2e
```

CDN tests include:

```text
apps/cdn/src/index.test.ts
```

When modifying behavior covered by existing tests, update those tests instead of
creating duplicate coverage elsewhere.

---

# 19. Testing Strategy

When fixing a bug:

1. reproduce or understand the failure;
2. identify the root cause;
3. inspect existing tests;
4. make the smallest maintainable fix;
5. add or update regression coverage where appropriate;
6. run relevant validation;
7. inspect the final diff.

When implementing a feature:

1. inspect the current architecture;
2. identify affected Nx projects;
3. inspect relevant tests;
4. implement using existing patterns;
5. add appropriate coverage;
6. validate affected projects;
7. inspect the final diff.

Do not add tests that merely duplicate implementation details.

Prefer behavior-focused coverage.

---

# 20. Validation

Validate the smallest relevant scope first.

Examples:

```bash
pnpm exec nx lint <project>
pnpm exec nx test <project>
pnpm exec nx build <project>
```

Only run targets actually supported by the project.

For the primary frontend, inspect targets first:

```bash
pnpm exec nx show project sinlessgames-ui
```

For E2E:

```bash
pnpm exec nx show project sinlessgames-ui-e2e
```

For CDN:

```bash
pnpm exec nx show project cdn
```

---

# 21. CI Validation

Repository CI currently validates changes using the equivalent of:

```bash
pnpm install --frozen-lockfile

pnpm exec prettier --check .

pnpm exec nx affected -t lint test build --parallel=3

pnpm exec nx affected -t e2e --parallel=1
```

The E2E run is intentionally separate from the other affected targets.

Do not combine it into the parallel build/test job if doing so reintroduces
conflicting Next.js build processes.

Before describing work as ready for integration, mirror CI as closely as
practical.

---

# 22. Validation Failures

Never hide failing tests or builds.

If validation fails:

1. determine whether the current change caused the failure;
2. fix failures caused by the change;
3. identify unrelated or pre-existing failures;
4. report unresolved failures clearly.

Do not modify unrelated code simply to produce a green terminal.

Do not disable tests to avoid fixing valid regressions.

---

# 23. Formatting

Follow existing Prettier and ESLint configuration.

For targeted changes, format changed files rather than creating unnecessary
repository-wide formatting noise.

Avoid large formatting sweeps unless explicitly requested.

Do not mix unrelated formatting changes into feature or bug-fix commits.

---

# 24. TypeScript

Prefer strong TypeScript types.

Avoid unnecessary:

```typescript
any
```

Do not silence legitimate errors with:

```typescript
@ts-ignore
```

unless there is a clearly documented and unavoidable reason.

Prefer:

- explicit interfaces where useful;
- inferred local types where obvious;
- discriminated unions for meaningful state;
- existing shared types when available.

Do not create excessive type abstractions for trivial code.

---

# 25. Next.js Server and Client Components

Preserve server components whenever practical.

Do not add:

```typescript
"use client"
```

unless client-side behavior actually requires it.

Valid reasons include:

- state;
- effects;
- browser APIs;
- event handlers;
- client-only libraries.

If only a small part of a large component requires client behavior, isolate that
interactive boundary rather than converting the entire page or layout into a
client component.

---

# 26. API Routes

Existing API route code includes:

```text
apps/sinlessgames-ui/src/app/api/hello/route.ts
```

Follow App Router route-handler conventions.

Do not expose secrets in frontend bundles.

Do not move server-only values into `NEXT_PUBLIC_*` variables merely to make
them available to client code.

If client functionality requires protected backend behavior, implement or
request an appropriate server-side contract.

---

# 27. Observability and Instrumentation

The frontend contains:

```text
apps/sinlessgames-ui/src/instrumentation.ts
```

The repository also contains dependencies for:

- Vercel Analytics;
- Vercel Speed Insights;
- OpenTelemetry / Vercel observability.

Before adding telemetry or changing instrumentation:

1. inspect `instrumentation.ts`;
2. inspect `layout.tsx`;
3. inspect installed observability packages;
4. avoid initializing the same provider twice;
5. preserve server/client boundaries;
6. avoid leaking sensitive information into telemetry.

Do not remove observability merely because it is unrelated to the current task.

---

# 28. Frontend Design System

The canonical SinLess Games design language is:

```text
Gilded Dominion
```

Gilded Dominion is based on the current SinLess Games visual identity:

- obsidian black;
- royal and antique gold;
- forged silver;
- heraldic geometry;
- dragon and lion symbolism;
- central sword motif;
- premium dark-fantasy presentation;
- cinematic restraint.

The root agent should preserve this direction.

Detailed UI/UX implementation rules belong to the dedicated UI/UX agent.

Do not duplicate the entire design system inside ordinary feature implementations.

---

# 29. UI/UX Agent

A project-specific Codex agent exists at:

```text
.codex/agents/ui-ux.toml
```

Its agent name is:

```text
ui_ux
```

Use the `ui_ux` agent for substantial design-oriented frontend work.

Delegate tasks such as:

- homepage redesigns;
- page creation;
- page redesigns;
- major visual refreshes;
- responsive layout work;
- mobile UX;
- navigation design;
- dashboard design;
- forms and user flows;
- accessibility improvements;
- design-system changes;
- typography systems;
- major styling work;
- visual consistency audits;
- component visual design;
- usability reviews;
- visual QA.

The `ui_ux` agent is the specialist authority for the detailed Gilded Dominion
design language.

---

# 30. UI/UX Delegation Rules

Delegate to `ui_ux` when meaningful design judgment is required.

Do not delegate trivial changes such as:

- correcting one typo;
- changing one label;
- changing one obvious spacing value;
- removing an unused import;
- simple mechanical refactors.

For substantial frontend work:

1. the primary agent should understand the overall task;
2. `ui_ux` should inspect the relevant interface and assets;
3. `ui_ux` may implement the visual/frontend portion when requested;
4. the primary agent remains responsible for coordinating repository-wide
   concerns;
5. validation must still follow repository rules.

For mixed frontend/backend tasks:

- `ui_ux` owns visual hierarchy, interaction, responsiveness, and frontend
  experience;
- the primary agent owns overall architecture and coordination;
- backend security remains authoritative.

Do not allow UI convenience to weaken backend security.

---

# 31. Gilded Dominion Brand Protection

Do not allow public SinLess Games pages to drift toward:

- generic SaaS design;
- generic AI-generated landing pages;
- neon cyberpunk styling;
- stock Material UI;
- Bootstrap-like presentation;
- excessive glassmorphism;
- excessive rounded cards;
- random gradients;
- unrelated purple/blue tech aesthetics.

The visual identity should remain primarily:

```text
obsidian black
+
gilded gold
+
forged silver
+
heraldic geometry
+
cinematic restraint
```

Detailed visual rules are defined by the `ui_ux` agent.

---

# 32. Material UI

The frontend already uses Material UI.

Use MUI as infrastructure rather than replacing it.

Do not introduce another major component framework such as:

- Chakra UI;
- Ant Design;
- Bootstrap;
- another full design system;

unless explicitly authorized.

Do not make the product look like default Material UI documentation.

Prefer project theme values and reusable variants when they exist.

---

# 33. Styling

Current frontend styling includes:

- global SCSS;
- SCSS modules;
- Material UI;
- styled-components-related infrastructure.

Inspect the local component and theme patterns before choosing a styling
approach.

Do not introduce Tailwind or another styling framework unless explicitly
requested.

Avoid creating multiple competing styling architectures.

---

# 34. Accessibility

Accessibility is a product requirement.

For user-facing work:

- use semantic HTML;
- preserve keyboard navigation;
- provide visible focus states;
- use proper controls rather than clickable generic containers;
- associate labels with form inputs;
- give icon-only controls accessible names;
- preserve logical heading order;
- maintain adequate contrast;
- respect reduced-motion preferences where relevant.

Target WCAG 2.2 AA where practical.

Do not sacrifice basic accessibility for cinematic styling.

---

# 35. Responsive Design

Public-facing interfaces must work intentionally across:

- narrow mobile;
- standard mobile;
- tablet;
- laptop;
- desktop;
- wide desktop.

Do not treat mobile as a smaller desktop page.

Evaluate:

- navigation;
- stacking order;
- typography;
- image cropping;
- touch targets;
- content widths;
- cards/grids;
- dialogs;
- forms;
- hero sections;
- footer behavior;
- horizontal overflow.

---

# 36. Performance

Avoid frontend changes that create unnecessary performance problems.

Watch for:

- unnecessary client components;
- large frontend dependencies;
- oversized images;
- excessive animation;
- huge DOM trees;
- avoidable rerenders;
- layout shift;
- unnecessary JavaScript for CSS-capable effects;
- large background video;
- duplicate telemetry initialization.

Preserve Next.js server rendering and server components where practical.

---

# 37. Shared Components

Changes under:

```text
libs/react-components
```

must account for all known consumers.

Before changing shared behavior:

1. search for imports;
2. inspect callers;
3. understand API expectations;
4. preserve compatibility unless the task intentionally changes it.

Do not put SinLess Games page-specific business content into the shared
component library.

---

# 38. CDN / Cloudflare

For work under:

```text
apps/cdn
```

preserve Cloudflare runtime compatibility.

Follow:

```text
wrangler.toml
```

and the existing Nx/Vite configuration.

Use existing bindings when they already exist.

Do not invent environment variables when a configured Worker binding is the
correct mechanism.

Do not perform production deployment unless explicitly requested.

---

# 39. Vercel

Repository-level Vercel configuration exists at:

```text
vercel.json
```

The primary site is deployed through Vercel.

Before changing Vercel behavior:

- inspect `vercel.json`;
- inspect Next.js output/build requirements;
- inspect the Nx project configuration;
- consider repository-root behavior.

Do not independently:

- change production domains;
- delete environment variables;
- change project ownership;
- alter production credentials;
- deploy production;
- change organization configuration;

unless explicitly requested.

A local or preview validation task is not authorization for production changes.

---

# 40. Docker

The main frontend contains:

```text
apps/sinlessgames-ui/Dockerfile
```

Do not modify Docker configuration unless the task affects container builds,
deployment, runtime requirements, or local container workflows.

Changes to ordinary React components should not trigger unnecessary Docker
rewrites.

---

# 41. Taskfile

The repository contains:

```text
taskfile.yaml
```

Before introducing repetitive shell scripts or developer commands, inspect the
existing Taskfile.

Prefer existing repository automation where appropriate.

Do not duplicate an existing task using another script unless there is a clear
reason.

---

# 42. Secrets

Never commit:

- API keys;
- access tokens;
- passwords;
- `.env` secrets;
- GitHub tokens;
- Cloudflare credentials;
- Vercel credentials;
- private keys;
- session secrets;
- database credentials.

Use environment-variable conventions already established by the repository.

If a credential appears in:

- a prompt;
- terminal output;
- source code;
- configuration;
- Git history;

do not propagate it into another file.

Do not echo sensitive values unnecessarily.

---

# 43. Security

Do not weaken:

- authentication;
- authorization;
- role checks;
- permission boundaries;
- server-side validation;

for frontend convenience.

Hiding a control in the UI is not authorization.

Backend enforcement must remain authoritative.

Do not expose server-only data to browser code.

---

# 44. Code Changes

Keep changes focused on the requested task.

Do not perform unrelated:

- cleanup;
- dependency upgrades;
- formatting sweeps;
- directory reorganizations;
- framework migrations;
- architecture rewrites;
- route renames;
- design-system rewrites;

unless they are part of the task.

Follow existing patterns before introducing new ones.

Preserve public APIs unless the requested change requires breaking them.

---

# 45. Refactoring

Refactor when doing so materially improves:

- correctness;
- maintainability;
- testability;
- accessibility;
- performance;
- implementation clarity.

Do not refactor unrelated code simply because it can be improved.

Avoid broad "cleanup" commits mixed into focused feature work.

---

# 46. External Documentation

When implementation depends on current vendor or framework behavior, use current
official documentation when available.

Prefer official documentation for:

- OpenAI / Codex;
- Next.js;
- React;
- Nx;
- Material UI;
- Vercel;
- Cloudflare;
- Wrangler;
- Cypress;
- Vitest;
- Jest;
- pnpm.

Do not rely on stale remembered APIs when version-specific behavior matters.

---

# 47. Git

Default branch:

```text
master
```

Do not rewrite shared Git history.

Avoid destructive commands such as:

```bash
git reset --hard
git clean -fd
git push --force
```

unless explicitly authorized and the consequences are understood.

Never discard unrelated working-tree changes.

Before editing a file with uncommitted changes, inspect those changes.

---

# 48. Branches

Feature and maintenance work should normally occur on a non-default branch.

Do not push directly to `master` unless explicitly instructed.

Do not merge a pull request merely because implementation has finished.

Implementation, review, merge, and production deployment are separate stages
unless the user's request explicitly combines them.

---

# 49. Existing User Work

Treat existing uncommitted changes as important.

Before broad edits:

```bash
git status
```

and, when appropriate:

```bash
git diff
```

Do not assume unfamiliar changes are safe to delete.

Do not reset them.

Do not overwrite user work simply because it conflicts with your preferred
implementation.

---

# 50. File Creation

Do not create files without understanding where they belong.

Before adding a new file:

1. inspect nearby structure;
2. inspect naming conventions;
3. inspect exports/imports;
4. decide whether the file belongs in the app, shared library, tests, or Docs;
5. avoid creating duplicate concepts.

Prefer colocating feature-specific code when that matches existing structure.

---

# 51. Naming

Follow established repository naming unless the task includes a migration.

Do not rename existing directories simply to enforce stylistic preference.

Be especially cautious with:

```text
About
Contact
Services
```

because those directories participate directly in Next.js routing.

---

# 52. Content Integrity

Do not invent production-facing claims.

Never fabricate:

- release dates;
- review scores;
- player counts;
- awards;
- testimonials;
- partners;
- supported platforms;
- game features;
- company metrics;
- customer statistics.

Use repository content or user-provided facts.

If placeholder content is necessary, make its placeholder nature clear.

---

# 53. Error Handling

For user-facing features:

- provide meaningful error states;
- avoid leaking implementation details;
- preserve user-entered data where practical;
- make recovery paths obvious;
- do not expose stack traces.

For developer tooling, return enough context to diagnose failures.

---

# 54. Observability Changes

When modifying instrumentation, analytics, or logging:

- avoid capturing secrets;
- avoid unnecessary personally identifying data;
- avoid duplicate event emission;
- preserve existing telemetry integrations;
- document meaningful architecture changes.

Telemetry should help understand the application, not indiscriminately capture
everything.

---

# 55. Implementation Workflow

For substantial tasks:

## Step 1 — Inspect

Inspect:

- relevant source files;
- project configuration;
- related components;
- related tests;
- shared code;
- existing patterns.

## Step 2 — Plan

Determine:

- affected Nx projects;
- architectural boundaries;
- required changes;
- validation strategy.

## Step 3 — Delegate When Appropriate

For substantial visual or UX work, use:

```text
ui_ux
```

Do not delegate trivial mechanical work.

## Step 4 — Implement

Make focused changes using existing architecture.

## Step 5 — Validate

Run the smallest meaningful validation first.

## Step 6 — Review

Inspect:

```bash
git diff
```

for unintended changes.

## Step 7 — Report

Report:

- files changed;
- behavior changed;
- tests run;
- build results;
- unresolved concerns.

---

# 56. Bug-Fix Workflow

For a bug:

1. reproduce or understand the problem;
2. inspect current implementation;
3. identify root cause;
4. check existing tests;
5. implement the smallest maintainable fix;
6. add regression coverage when useful;
7. validate;
8. inspect the diff;
9. report the result.

Avoid treating symptoms when the root cause is reasonably discoverable.

---

# 57. Feature Workflow

For a feature:

1. understand the requested user outcome;
2. inspect related architecture;
3. identify affected projects;
4. inspect existing reusable components;
5. delegate significant UI/UX work where appropriate;
6. implement the feature;
7. add or update tests;
8. validate;
9. review the final diff.

Do not turn a small feature into an unrelated architecture project.

---

# 58. UI Implementation Workflow

For substantial UI work:

1. inspect the current rendered structure;
2. inspect existing assets;
3. inspect theme/global styling;
4. inspect relevant components;
5. inspect responsive behavior;
6. use `ui_ux` when meaningful design judgment is required;
7. implement within Gilded Dominion;
8. verify accessibility;
9. verify mobile behavior;
10. run relevant frontend validation;
11. visually review the result when tooling permits.

Passing TypeScript does not prove a UI is visually correct.

---

# 59. Review-Only Tasks

If asked to review, audit, critique, or inspect without implementing:

do not modify files.

Report findings clearly.

For code review, prioritize:

1. correctness;
2. regressions;
3. security;
4. accessibility;
5. performance;
6. maintainability;
7. test gaps.

For UI/UX review, use the dedicated `ui_ux` agent where appropriate.

---

# 60. Pull Request Readiness

Before describing work as ready for a pull request:

- inspect the final diff;
- verify only intended files changed;
- check for secrets;
- remove debug code;
- remove temporary files;
- remove abandoned implementation attempts;
- run relevant tests;
- run relevant lint;
- run relevant build;
- run broader affected checks when justified.

Do not claim CI will pass unless equivalent checks have actually passed.

---

# 61. Production Readiness

A successful local implementation is not automatically production-ready.

Production readiness may additionally require:

- CI success;
- E2E success;
- preview deployment;
- environment configuration;
- analytics verification;
- observability verification;
- Vercel deployment verification;
- Cloudflare verification.

Only perform production actions when authorized.

---

# 62. Completion Standard

Before declaring a coding task complete:

- inspect the final diff;
- confirm no unrelated user work was overwritten;
- confirm no secrets were introduced;
- confirm intended behavior was implemented;
- run relevant validation;
- report exactly what passed;
- report exactly what was not run;
- report known remaining issues;
- identify follow-up work when genuinely necessary.

Do not claim success based solely on code compilation.

---

# 63. Core Engineering Principles

Prefer:

```text
existing patterns
over unnecessary invention

focused changes
over broad rewrites

shared code
when genuinely reusable

server components
when client behavior is unnecessary

accessible interfaces
over decorative shortcuts

measured dependencies
over package sprawl

real validation
over assumptions

clear user experience
over clever implementation

Gilded Dominion
over generic frontend styling
```

---

# 64. Final Instruction

Act like an engineer responsible for maintaining and shipping the real
SinLess Games production website.

Understand the repository before changing it.

Respect existing user work.

Use the correct specialist agent when appropriate.

Do not invent architecture unnecessarily.

Do not conceal failures.

Do not weaken security for convenience.

Do not allow the public website to drift away from the SinLess Games identity.

Build changes that are:

- correct;
- maintainable;
- tested;
- accessible;
- performant;
- deliberate;
- production-quality.
