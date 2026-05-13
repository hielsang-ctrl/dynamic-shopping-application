import { useEffect, useState } from 'react'
import Cart from './components/Cart'
import DarkModeToggle from './components/DarkModeToggle'
import ProductList from './components/ProductList'
import './App.css'

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Smart Watch',
    category: 'Electronics',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Cotton Hoodie',
    category: 'Fashion',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Running Shoes',
    category: 'Fashion',
    price: 74.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'Ceramic Plant Pot',
    category: 'Home',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Desk Lamp',
    category: 'Home',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=600&q=80',
  },
]

function App() {
  const [category, setCategory] = useState('All')
  const [cart, setCart] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
  }, [darkMode])

  const categories = ['All', ...new Set(products.map((product) => product.category))]
  const filteredProducts =
    category === 'All'
      ? products
      : products.filter((product) => product.category === category)

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function handleAddToCart(product) {
    setCart((currentCart) => [...currentCart, product])
  }

  function handleToggleDarkMode() {
    setDarkMode((currentMode) => !currentMode)
  }

  return (
    <main className={`shop ${darkMode ? 'dark-mode' : ''}`}>
      <section className="shop-header">
        <div>
          <p className="eyebrow">React useState shop</p>
          <h1>Dynamic Shopping Application</h1>
          <p className="shop-intro">
            Filter products by category and add your favorite items to the cart.
          </p>
        </div>

        <label className="category-filter">
          <span>Category</span>
          <select value={category} onChange={handleCategoryChange}>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <DarkModeToggle
          darkMode={darkMode}
          onToggleDarkMode={handleToggleDarkMode}
        />
      </section>

      <div className="shop-layout">
        <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
        <Cart cartItems={cart} />
      </div>
    </main>
  )
}

export default App
