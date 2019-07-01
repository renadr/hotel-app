import React, { Component } from 'react';
import './shopping-cart.scss';
import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item';

export default class ShoppingCart extends Component {
  render() {
    return (
      <div className="shopping-cart">
        <h2>Panier</h2>
        <div className="shopping-cart-list">
          <ShoppingCartItem />
          <ShoppingCartItem />
        </div>
        <div className="shopping-cart-total">
          <div className="shopping-cart-total-label">Total</div>
          <div className="shopping-cart-total-amount">400€</div>
        </div>
      </div>
    );
  }
}
