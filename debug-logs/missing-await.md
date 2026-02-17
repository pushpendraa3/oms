## Problem
Product creation returned 201 but GET returned empty array.

## What I Expected
Product should be saved to database.

## Root Cause
I forgot to use `await` on `prisma.product.create()`.

The promise was never awaited, so the API returned success before the DB write completed.

## Fix
Added `await` before Prisma call.

## Engineering Lesson
Always await database writes. Silent async bugs are dangerous.
