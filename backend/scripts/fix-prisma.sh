#!/bin/bash

echo "Killing Node processes (if any)..."
taskkill //F //IM node.exe > /dev/null 2>&1

echo "🧹 Removing Prisma engine cache..."
rm -rf node_modules/.prisma

echo "Regenerating Prisma client..."
npx prisma generate

echo "Running migrations..."
npx prisma migrate dev

echo "Prisma recovery complete."
