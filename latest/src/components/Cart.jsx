function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <aside className="cart" aria-label="Shopping cart">
      <h2>Cart</h2>
      <p className="cart-count">{cartItems.length} item(s)</p>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={`${item.id}-${index}`}>
                <span>{item.name}</span>
                <strong>${item.price.toFixed(2)}</strong>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </>
      )}
    </aside>
  )
}

export default Cart
