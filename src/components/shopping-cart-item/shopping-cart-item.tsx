import React, { Component } from 'react';
import './shopping-cart-item.scss';
import 'react-dates/initialize';

interface Hotel {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    price: number;
}

interface MyProps {
    hotel: Hotel;
}

interface MyState {}

class ShoppingCartItem extends Component<MyProps, MyState> {
    public render(): JSX.Element {
        const { hotel } = this.props;
        return (
            <div className="shopping-cart-item">
                <div className="shopping-cart-item-image">
                    <div style={{ backgroundImage: `url(${hotel.imgUrl})` }} />
                </div>
                <div className="shopping-cart-item-price">
                    <p className="shopping-cart-item-price-value">{hotel.price}€</p>
                    <p className="shopping-cart-item-price-text">prix/nuit</p>
                </div>
            </div>
        );
    }
}
export default ShoppingCartItem;
