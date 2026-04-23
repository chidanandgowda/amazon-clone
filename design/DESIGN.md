# Product Requirements Document: Amazon-Inspired E-commerce App

## 1. Project Overview
A modern, high-performance e-commerce platform built with the MERN stack (MongoDB, Express, React, Node.js). The goal is to provide a seamless shopping experience from product discovery to cart management.

## 2. Core Modules & User Flows
### A. Authentication & User Management
*   **Flow:** User Sign Up -> Login -> Persistent Session (JWT).
*   **Backend:** `/api/auth/signup`, `/api/auth/login`.
*   **Database:** `User` schema (name, email, hashed password).

### B. Product Discovery (Listing Page)
*   **Feature:** Responsive grid of product cards.
*   **Elements:** Product image, title, price, and "View Details" link.
*   **Backend:** `/api/products` (GET).
*   **Database:** `Product` schema (title, price, image URL, category, description).

### C. Product Details
*   **Feature:** Deep dive into a single product.
*   **Elements:** Enlarged image, detailed description, rating, and prominent "Add to Cart" CTA.
*   **Backend:** `/api/products/:id` (GET).

### D. Cart Management
*   **Feature:** Dynamic shopping cart.
*   **Elements:** List of items, editable quantities, "Remove" button, and subtotal calculation.
*   **Backend:** `/api/cart` (GET, POST, PUT, DELETE).
*   **Database:** `Cart` schema (userId, items: [{productId, quantity}]).

## 3. Technical Architecture
*   **Frontend:** React (Vite) for speed, Tailwind CSS for styling, Axios for API communication.
*   **Backend:** Node.js + Express.js for the REST API.
*   **Database:** MongoDB Atlas (NoSQL) for flexible schema design.
*   **State Management:** React Context API or Redux for global cart and user state.

## 4. Visual Identity
*   **Primary Colors:** Navy (#232f3e), Orange (#febd69).
*   **Layout:** Clean, white-space heavy, mobile-responsive grid.
*   **Components:** Top navigation bar (Logo, Search, Account, Cart).