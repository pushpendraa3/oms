## Problem
TypeScript error: File not under rootDir.

## Root Cause
rootDir was set to ./src, but Prisma config was outside src.

TypeScript tried compiling everything.

## Fix
Removed rootDir restriction and simplified tsconfig.

## Engineering Lesson
Build system configuration is part of backend engineering.
