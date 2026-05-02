# Products API

A simple Express and MongoDB API for managing products.

## Base URL

```txt
https://products-api-kodex.vercel.app
```

## Full Endpoint URLs

```txt
GET    https://products-api-kodex.vercel.app/api/products/all
GET    https://products-api-kodex.vercel.app/api/products/:id
POST   https://products-api-kodex.vercel.app/api/products/add
PATCH  https://products-api-kodex.vercel.app/api/products/update/:id
DELETE https://products-api-kodex.vercel.app/api/products/delete/:id
```
## Endpoints

```txt
GET    /api/products/all
```

Gets all products.

```txt
GET    /api/products/:id
```

Gets a single product by id.

```txt
POST   /api/products/add
```

Creates a new product.

Body:

```json
{
  "name": "Laptop",
  "price": 50000,
  "description": "A good laptop",
  "category": "Electronics",
  "stock": 5
}
```

```txt
PATCH  /api/products/update/:id
```

Updates a product by id. Send only the fields you want to update.

Body example:

```json
{
  "price": 45000,
  "stock": 8
}
```

```txt
DELETE /api/products/delete/:id
```

Deletes a product by id.


## Local Setup

```bash
npm install
npm start
```

Create a `.env` file:

```txt
MONGO_URI=your_mongodb_connection_string
```
