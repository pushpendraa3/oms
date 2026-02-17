# Request Flow

Client sends request  
→ Express middleware  
→ Controller  
→ (Level 3) Service Layer  
→ Prisma Client  
→ PostgreSQL  
→ Response  

Failures can occur at:
- Validation
- Auth
- Business rule enforcement
- DB write
- Network layer

System must handle each explicitly.
