import ProductCard from './ProductCard'

function ProductList({ products, onAddToCart }) {
  return (
    <section className="products" aria-label="Products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  )
}

export default ProductList
