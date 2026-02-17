# OMS — B2B Order Management System

This project is a backend-first Order Management System (OMS) built incrementally to demonstrate production-ready engineering depth.

It was intentionally built in levels:

Level 1 → Working CRUD + TypeScript migration  
Level 2 → Auth, RBAC, lifecycle rules, validation  
Level 3 → Service layer, transactions, failure handling  

The goal is not feature volume, but correctness, debugging discipline, and system thinking.

---

## Tech Stack

Backend:
- Node.js
- Express
- Prisma ORM
- PostgreSQL
- TypeScript

Frontend:
- React
- Fetch API
- TypeScript

---

## Architecture Overview

Frontend → Backend → Prisma → PostgreSQL

Request lifecycle:

Request  
→ Middleware  
→ Controller  
→ (Level 3) Service Layer  
→ Prisma Client  
→ Database  
→ Response  

The system evolves to introduce separation of concerns and failure-safe design gradually.

---

## Evolution by Levels

### Level 1 — Task Executor
- Product CRUD
- Prisma setup
- PostgreSQL integration
- TypeScript migration
- Basic React integration

Focus: making CRUD boring and removing blank-editor fear.

---

### Level 2 — Feature Owner (In Progress)
- JWT authentication
- Role-based access (Admin / Staff)
- Order lifecycle enforcement
- Input validation
- Pagination
- Idempotency

Focus: enforcing business rules.

---

### Level 3 — System Builder (Planned)
- Service layer
- Transactions
- Soft deletes
- Audit logs
- Caching
- Structured logging
- Monitoring

Focus: production mindset and failure handling.

---

## Real Bugs Encountered

This project intentionally documents real debugging experiences:

- Missing `await` causing silent DB failure
- Prisma engine EPERM lock (Windows file locking issue)
- TypeScript `rootDir` misconfiguration
- Prisma relation validation error (missing opposite relation)
- ESM import issues with PrismaClient
- React re-render not triggering due to incorrect state update

See `/debug-logs` for detailed breakdowns.

---