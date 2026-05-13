# Dynamic Shopping Application

A simple React shopping app built with Vite. It displays a list of products, lets users filter by category, add items to a cart, view the cart total, and switch between light and dark mode.

## Features

- Product listing with images, categories, and prices
- Category filtering
- Add-to-cart functionality
- Cart item count and total price calculation
- Light and dark mode toggle
- Responsive layout for desktop and mobile screens

## Tech Stack

- React
- Vite
- CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/
    Cart.jsx
    DarkModeToggle.jsx
    ProductCard.jsx
    ProductList.jsx
  App.jsx
  App.css
  index.css
  main.jsx
```

## Main Components

- `App.jsx` manages product data, filtering, cart state, and theme state.
- `ProductList.jsx` renders the filtered products.
- `ProductCard.jsx` displays each product and its add-to-cart button.
- `Cart.jsx` shows selected items and the total cost.
- `DarkModeToggle.jsx` switches the app between light and dark mode.

## Author
Hiel Sang