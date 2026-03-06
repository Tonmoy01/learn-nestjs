# Learn NestJS

A hands-on project for learning NestJS — building REST APIs with TypeScript.

## What I'm Doing

Building a backend application using **NestJS** to understand how modern Node.js frameworks work. This project covers creating modules, controllers, services, DTOs, validation pipelines, and database integration from scratch.

## What I've Learned

### NestJS Fundamentals
- **Modules** — Organizing the application into feature modules (`AppModule`, `AuthModule`, `UserModule`)
- **Controllers** — Handling HTTP requests with decorators like `@Controller`, `@Get`, `@Post`
- **Services** — Business logic layer with `@Injectable` providers
- **Dependency Injection** — How NestJS manages providers and services across modules

### Auth Module
- Created an `AuthService` with registration logic
- `POST /auth/register` endpoint with duplicate email detection
- Planned flow: check email existence → hash password → create user → generate JWT → return token

### User Module
- Created a `UserService` to handle user-related database queries
- `getUserByEmail` method for looking up users by email
- Exported `UserService` for use in other modules (e.g., `AuthModule`)

### Database (Prisma + SQLite)
- Integrated **Prisma ORM** with SQLite via `@prisma/adapter-libsql`
- Created a `PrismaService` that extends `PrismaClient` and connects on module init
- Defined a `User` model with fields: `id`, `name`, `email`, `password`, `created_at`, `updated_at`
- Database migrations for initial schema and adding timestamp fields

### Validation & DTOs
- Using **class-validator** and **class-transformer** for request body validation
- Enforcing strong password requirements and email format at the DTO level
- Enabled `whitelist` and `forbidNonWhitelisted` in the global `ValidationPipe`

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
├── prisma.service.ts      # Prisma database client service
├── auth/
│   ├── auth.module.ts     # Auth feature module
│   ├── auth.controller.ts # Auth endpoints
│   ├── auth.service.ts    # Auth business logic
│   └── dto/
│       └── register.dto.ts # Registration validation
└── user/
    ├── user.module.ts     # User feature module
    └── user.service.ts    # User database queries
prisma/
├── schema.prisma          # Database schema
└── migrations/            # Database migrations
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Run database migrations
pnpm exec prisma migrate dev

# Run in development mode
pnpm run start:dev

# Run tests
pnpm run test
```

## Tech Stack

- NestJS 11
- TypeScript 5
- Prisma ORM (SQLite)
- class-validator / class-transformer
- Jest
- pnpm
