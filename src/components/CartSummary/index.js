// Write your code here
import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      console.log(cartList)

      const initialValue = 0
      const getSumOfAllProducts = cartList.reduce(
        (accumulator, current) =>
          accumulator + current.price * current.quantity,
        initialValue,
      )
      return (
        <div className="cart-summary-container">
          <h1 className="cart-summary-heading">
            Order Total:{' '}
            <span className="total">Rs {getSumOfAllProducts}/- </span>
          </h1>
          <p className="items-count">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
