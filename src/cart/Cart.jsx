import React from 'react';
import { useCart } from './CartContext';
import { NavLink } from 'react-router-dom';
import './cart.css'
import { Button } from 'react-bootstrap';

const Cart = () => {
  let { cart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cartpage">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list container">
            {cart.map((item, index) => (

              <li key={item.id || index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 style={{ fontSize: '18px' }}>{item.name}</h3>
                  <h3>${(item.price || 0).toFixed(2)}</h3>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}
                      className="quantity-button"> - </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}
                      className="quantity-button"> + </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <NavLink to="/paymentdetail">
              <Button
                className="checkout-button"
                onClick={() => {
                  clearCart();
                  alert("Thank you for your purchase!");
                }}>
              Proceed to Checkout
              </Button>

            </NavLink>
          </div>
        </>
      )}
      <footer className=" text-white mt-5 pt-4 pb-3">
        <div className="container">
          <div className="row">


            <div className="col-md-4 mb-3">
              <h5>About GameCD</h5>
              <p>Your ultimate source for classic and modern game CDs. Discover, collect, and play.</p>
            </div>


            <div className="col-md-4 mb-3">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/product" className="text-white text-decoration-none">Product</a></li>
                <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              </ul>
            </div>

            <div className="col-md-4 mb-3">
              <h5>Follow Us</h5>
              <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          <hr className="bg-secondary" />

          <div className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} GameCD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cart;
