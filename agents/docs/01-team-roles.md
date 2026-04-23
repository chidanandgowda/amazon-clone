# Team Roles

This project is split across 6 students so everyone can work in parallel.

## Student 1: Frontend Product Listing

### Goal

Build the page that shows multiple products.

### Responsibilities

- display product cards
- show product image
- show product title
- show product price
- render products using `.map()`
- keep layout clean and simple

### Suggested Output

- `frontend/src/pages/ProductList.jsx`
- `frontend/src/components/ProductCard.jsx`
- related CSS file(s)

### AI Prompt

`Create a React component to display product cards with image, title and price using dummy data`

## Student 2: Frontend Product Detail

### Goal

Build the page for a single product.

### Responsibilities

- show title
- show image
- show description
- show price
- add `Add to Cart` button
- receive product id from route or props

### Suggested Output

- `frontend/src/pages/ProductDetail.jsx`

### AI Prompt

`Create a React page to show product details with title, image, description and add to cart button`

## Student 3: Frontend Cart Page

### Goal

Build the cart screen.

### Responsibilities

- show all cart items
- show quantity
- add `+` and `-` buttons
- remove item from cart
- show total if possible

### Suggested Output

- `frontend/src/pages/CartPage.jsx`

### AI Prompt

`Create a React cart page showing list of items with quantity and remove button`

## Student 4: Backend Auth

### Goal

Create user authentication APIs.

### Responsibilities

- `POST /signup`
- `POST /login`
- validate email and password
- connect user model to MongoDB

### Suggested Output

- `backend/src/routes/authRoutes.js`
- `backend/src/controllers/authController.js`
- `backend/src/models/User.js`

### AI Prompt

`Create signup and login APIs in Node.js Express with MongoDB step by step for beginners`

## Student 5: Backend Product API

### Goal

Create APIs to serve product data.

### Responsibilities

- `GET /products`
- `GET /products/:id`
- return dummy data first if database is not ready
- move to MongoDB if time allows

### Suggested Output

- `backend/src/routes/productRoutes.js`
- `backend/src/controllers/productController.js`
- `backend/src/models/Product.js`

### AI Prompt

`Create an API to return list of products and single product by id in Express`

## Student 6: Backend Cart API

### Goal

Create APIs for cart actions.

### Responsibilities

- `POST /cart`
- `DELETE /cart`
- `PUT /cart`
- store cart per user
- update item quantity

### Suggested Output

- `backend/src/routes/cartRoutes.js`
- `backend/src/controllers/cartController.js`
- `backend/src/models/Cart.js`

### AI Prompt

`Create APIs for cart: add item, remove item, update quantity using Node.js and MongoDB`

## Shared Responsibility

All students must help with:

- setup
- testing each other’s work
- fixing merge conflicts
- final demo preparation
