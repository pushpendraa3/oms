# Database Relations

Product
- id
- name
- price
- category

Order
- id
- quantity
- productId (foreign key)

Relation:
Order belongs to Product.
Product has many Orders.

Prisma requires explicit opposite relation fields for schema validation.
