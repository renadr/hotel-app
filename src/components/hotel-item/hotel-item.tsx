import React, { Component } from 'react';
import './hotel-item.scss';

const bg = require('./85736918.jpg');

export default class HotelItem extends Component {
  render() {
    return (
      <div className="hotel-item">
        <div className="hotel-item-image">
          <div style={{ backgroundImage: `url(${bg})` }} />
        </div>
        <div className="hotel-item-description">
          <div className="hotel-item-description-top">
            <div className="hotel-item-description-top-name">
              <h2>Hotel de la plage</h2>
            </div>
            <div className="hotel-item-description-top-price">
              <p className="hotel-item-description-top-price-value">400€</p>
              <p className="hotel-item-description-top-price-text">prix/nuit</p>
            </div>
          </div>
          <div className="hotel-item-description-bottom">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos iste sapiente eius,
              sed vitae eum possimus illo velit nobis nulla laborum porro exercitationem fugiat
              autem harum perspiciatis? Vel, quisquam!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
