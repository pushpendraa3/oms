# Dev Recovery Scripts

## fix-prisma.sh

Used when Prisma engine gets locked (Windows EPERM error).

Run:

./scripts/fix-prisma.sh

This:
- Kills node processes
- Deletes .prisma engine
- Regenerates client
- Runs migration
