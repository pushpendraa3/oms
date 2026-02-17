## Problem
Named export PrismaClient not found (ESM vs CommonJS conflict).

## Root Cause
Project was using "type": "module" and Prisma client was CommonJS.

## Fix
Imported using:

import pkg from '@prisma/client';
const { PrismaClient } = pkg;

## Engineering Lesson
Understand module systems when mixing ESM and CJS.
