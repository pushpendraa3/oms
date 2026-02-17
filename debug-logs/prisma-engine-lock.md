## Problem
Error: EPERM unlink query-engine-windows.exe during prisma migrate.

## Root Cause
Windows locked Prisma query engine binary while Node process was running.

Prisma uses a native executable for the query engine, which Windows aggressively locks.

## Fix
- Closed all Node processes
- Deleted node_modules/.prisma
- Ran prisma generate
- Added recovery script

## Engineering Lesson
Native binaries behave differently from JS modules. OS-level file locking must be understood.
