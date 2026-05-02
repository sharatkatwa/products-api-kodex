# Products API

A simple Express and MongoDB API for managing products.

## Base URL

```txt
http://localhost:3000/api/products
```

## Product Fields

Each product can have these fields:

```json
{
  "name": "Product name",
  "price": 100,
  "description": "Product description",
  "category": "Product category",
  "stock": 10
}
```

## Endpoints

### Get All Products

```txt
GET /api/products/all
```

Gets all products from the database.

Example response:

```json
{
  "status": 200,
  "message": "products fetched successfully",
  "products": []
}
```

### Get Single Product

```txt
GET /api/products/:id
```

Gets one product by its MongoDB id.

Example:

```txt
GET /api/products/65f123456789abcd12345678
```

Example response:

```json
{
  "status": 200,
  "message": "product fetched successfully",
  "product": {
    "_id": "65f123456789abcd12345678",
    "name": "Laptop",
    "price": 50000,
    "description": "A good laptop",
    "category": "Electronics",
    "stock": 5
  }
}
```

### Create Product

```txt
POST /api/products/add
```

Creates a new product.

Request body:

```json
{
  "name": "Laptop",
  "price": 50000,
  "description": "A good laptop",
  "category": "Electronics",
  "stock": 5
}
```

Example response:

```json
{
  "status": 201,
  "message": "Prduct created successfully",
  "createdProduct": {
    "_id": "65f123456789abcd12345678",
    "name": "Laptop",
    "price": 50000,
    "description": "A good laptop",
    "category": "Electronics",
    "stock": 5
  }
}
```

### Update Product

```txt
PATCH /api/products/update/:id
```

Updates a product by its MongoDB id. You can send only the fields you want to update.

Example:

```txt
PATCH /api/products/update/65f123456789abcd12345678
```

Request body:

```json
{
  "price": 45000,
  "stock": 8
}
```

Example response:

```json
{
  "status": 200,
  "message": "Product updated successfully",
  "updatedProduct": {
    "_id": "65f123456789abcd12345678",
    "name": "Laptop",
    "price": 45000,
    "description": "A good laptop",
    "category": "Electronics",
    "stock": 8
  }
}
```

### Delete Product

```txt
DELETE /api/products/delete/:id
```

Deletes a product by its MongoDB id.

Example:

```txt
DELETE /api/products/delete/65f123456789abcd12345678
```

Example response:

```json
{
  "status": 204,
  "message": "Product deleted successfully",
  "deletedProduct": {
    "_id": "65f123456789abcd12345678",
    "name": "Laptop",
    "price": 45000,
    "description": "A good laptop",
    "category": "Electronics",
    "stock": 8
  }
}
```

## Run Project

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

The server runs on:

```txt
http://localhost:3000
```

## Environment Variables

Create a `.env` file and add your MongoDB connection string:

```txt
MONGO_URI=your_mongodb_connection_string
```
