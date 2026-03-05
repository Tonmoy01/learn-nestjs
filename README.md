# Learn NestJS

A hands-on project for learning NestJS — building REST APIs with TypeScript.

## What I'm Doing

Building a backend application using **NestJS** to understand how modern Node.js frameworks work. This project covers creating modules, controllers, DTOs, and validation pipelines from scratch.

## What I've Learned

### NestJS Fundamentals
- **Modules** — Organizing the application into feature modules (`AppModule`, `AuthModule`)
- **Controllers** — Handling HTTP requests with decorators like `@Controller`, `@Get`, `@Post`
- **Dependency Injection** — How NestJS manages providers and services

### Auth Module
- Created an `AuthController` with a `POST /auth/register` endpoint
- Built a `RegisterDto` using **class-validator** decorators for input validation:
  - `@IsNotEmpty`, `@IsString`, `@IsEmail`, `@IsStrongPassword`

### Validation & DTOs
- Using **class-validator** and **class-transformer** for request body validation
- Enforcing strong password requirements and email format at the DTO level

### Tooling
- **TypeScript** for type safety
- **pnpm** as the package manager
- **ESLint** + **Prettier** for code formatting and linting
- **Jest** for unit and e2e testing

## Project Structure

```
src/
├── app.module.ts          # Root module
├── app.controller.ts      # Root controller
├── app.service.ts         # Root service
├── main.ts                # Application entry point
└── auth/
    ├── auth.module.ts     # Auth feature module
    ├── auth.controller.ts # Auth endpoints
    └── dto/
        └── register.dto.ts # Registration validation
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Run in development mode
pnpm run start:dev

# Run tests
pnpm run test
```

## Tech Stack

- NestJS 11
- TypeScript 5
- class-validator / class-transformer
- Jest
- pnpm
