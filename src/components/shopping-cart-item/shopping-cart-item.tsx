import React, { Component } from 'react';
import './shopping-cart-item.scss';

const bg = require('./85736918.jpg');

export default class ShoppingCartItem extends Component {
  render() {
    return (
      <div className="shopping-cart-item">
        <div className="shopping-cart-item-image">
          <div style={{ backgroundImage: `url(${bg})` }} />
        </div>
        <div className="shopping-cart-item-price">
          <p className="shopping-cart-item-price-value">400€</p>
          <p className="shopping-cart-item-price-text">prix/nuit</p>
        </div>
      </div>
    );
  }
}
