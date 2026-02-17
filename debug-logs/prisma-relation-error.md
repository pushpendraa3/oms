## Problem
Error P1012: Relation field is missing opposite relation field.

## Root Cause
Prisma requires both sides of a relation to be defined.

Order had:
product Product @relation(...)

But Product did not define:
orders Order[]

## Fix
Added opposite relation field to Product model.

## Engineering Lesson
ORMs require explicit relation definitions for consistency and schema validation.
