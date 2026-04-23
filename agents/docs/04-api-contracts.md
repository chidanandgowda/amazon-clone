# API Contracts

These contracts let frontend and backend work in parallel.

If backend is not ready, frontend can use dummy data with the same shape.

## Product Object

```json
{
  "_id": "p1",
  "title": "Wireless Headphones",
  "price": 2499,
  "image": "https://example.com/product.jpg",
  "description": "Noise cancelling headphones with long battery life"
}
```

## User Object

```json
{
  "_id": "u1",
  "name": "Ganesh",
  "email": "ganesh@example.com"
}
```

## Cart Item Object

```json
{
  "productId": "p1",
  "title": "Wireless Headphones",
  "price": 2499,
  "image": "https://example.com/product.jpg",
  "quantity": 2
}
```

## Auth APIs

### `POST /signup`

Request:

```json
{
  "name": "Ganesh",
  "email": "ganesh@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "User created successfully",
  "user": {
    "_id": "u1",
    "name": "Ganesh",
    "email": "ganesh@example.com"
  }
}
```

### `POST /login`

Request:

```json
{
  "email": "ganesh@example.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "Login successful",
  "user": {
    "_id": "u1",
    "name": "Ganesh",
    "email": "ganesh@example.com"
  }
}
```

## Product APIs

### `GET /products`

Response:

```json
[
  {
    "_id": "p1",
    "title": "Wireless Headphones",
    "price": 2499,
    "image": "https://example.com/product.jpg",
    "description": "Noise cancelling headphones with long battery life"
  }
]
```

### `GET /products/:id`

Response:

```json
{
  "_id": "p1",
  "title": "Wireless Headphones",
  "price": 2499,
  "image": "https://example.com/product.jpg",
  "description": "Noise cancelling headphones with long battery life"
}
```

## Cart APIs

### `POST /cart`

Request:

```json
{
  "userId": "u1",
  "productId": "p1",
  "quantity": 1
}
```

### `PUT /cart`

Request:

```json
{
  "userId": "u1",
  "productId": "p1",
  "quantity": 3
}
```

### `DELETE /cart`

Request:

```json
{
  "userId": "u1",
  "productId": "p1"
}
```

### Example Cart Response

```json
{
  "userId": "u1",
  "items": [
    {
      "productId": "p1",
      "title": "Wireless Headphones",
      "price": 2499,
      "image": "https://example.com/product.jpg",
      "quantity": 2
    }
  ]
}
```

## Minimum Database Schema

### User

- name
- email
- password

### Product

- title
- price
- image
- description

### Cart

- userId
- items
