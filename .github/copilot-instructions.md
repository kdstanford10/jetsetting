# JetsettingWeb AI Coding Instructions

## Project Context

- **Framework**: Angular 21 (Bleeding Edge)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + SCSS
- **Backend**: Firebase (Functions v2, Firestore)
- **Testing**: Vitest (`ng test`)

## Architecture & Structure

- **Standalone Components**: All components are `standalone: true`.
- **Directory Structure**:
  - `src/app/pages/`: Route-level components (e.g., `home/`, `about-page/`).
  - `src/app/components/`: Reusable UI components.
  - `src/app/layout/`: Global layout elements (Header, Footer).
  - `functions/`: Firebase Cloud Functions (v2).
- **File Naming Convention**:
  - Follow standard Angular naming conventions (e.g., `home.component.ts`).
  - Prefer keeping template (`.html`) and styles (`.scss`) separate from `.ts`.

## Core Development Patterns

### Dependency Injection

- Use `inject()` function for Dependency Injection. Avoid constructor injection.

  ```typescript
  // Right
  private fb = inject(FormBuilder);

  // Wrong
  constructor(private fb: FormBuilder) {}
  ```

### Forms

- Use **Reactive Forms** (`FormGroup`, `FormControl`).
- Injected `FormBuilder` is preferred for creation.

### Firebase Integration

- **Functions**: Use Callable functions (`onCall`) defined in `functions/src/index.ts`.
- **Client**: Call functions using `@angular/fire/functions`.
  ```typescript
  private functions = inject(Functions);
  // ... httpsCallable(this.functions, 'submitContactForm')
  ```

### Styling

- **Primary**: Use **Tailwind CSS** utility classes for layout, spacing, and colors.
- **Secondary**: Use SCSS for complex animations or component-specific overrides that Tailwind can't easily handle.

## Building & Testing

- **Dev Server**: `ng serve`
- **Unit Tests**: `ng test` (Runs **Vitest**, not Karma).
- **Build**: `ng build`

## Common Tasks

- **New Page**: Create folder in `pages/`, add route in `app.routes.ts`.
- **New Function**: Add export in `functions/src/index.ts`, deploy with Firebase tools.
