# Workflow And Branching

This is the most important doc for team collaboration.

## Branch Naming

Each person should create a separate branch.

Examples:

- `feature/frontend-product-list`
- `feature/frontend-product-detail`
- `feature/frontend-cart`
- `feature/backend-auth`
- `feature/backend-products`
- `feature/backend-cart`

## Team Workflow

1. Pull latest code from main
2. Create your branch
3. Work only on your assigned feature
4. Commit small changes often
5. Push your branch
6. Merge only after testing

## File Ownership

To avoid conflicts, agree on file ownership first.

Recommended split:

- Student 1 owns product list components and styles
- Student 2 owns product detail page
- Student 3 owns cart page
- Student 4 owns auth routes, controllers, model
- Student 5 owns product routes, controllers, model
- Student 6 owns cart routes, controllers, model

## Shared Files

These files can easily create merge conflicts:

- `frontend/src/App.jsx`
- `frontend/src/main.jsx`
- `backend/package.json`
- backend routing setup files

Only one person should update shared setup files at a time, or the team should coordinate before editing them.

## Daily Coordination Rule

Before coding, each person should say:

- what file they are editing
- what feature they are building
- what API or UI dependency they need

## Merge Strategy

Merge in this order when possible:

1. shared setup
2. backend APIs
3. frontend pages with dummy data
4. frontend connected to backend
5. final integration fixes

## Definition Of Done

A task is done only when:

- code runs locally
- no obvious console/server errors
- basic manual test is completed
- code is pushed to branch
- team knows how to use it
