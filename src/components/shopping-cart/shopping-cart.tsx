import React, { Component } from 'react';
import './shopping-cart.scss';
import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

interface MyProps {
    bookedHotels: any;
}

interface MyState {}

class ShoppingCart extends Component<MyProps, MyState> {
    public totalCart(): number {
        const { bookedHotels } = this.props;
        let totalCart = 0;
        if (bookedHotels.length > 0) {
            bookedHotels.forEach((hotel): any => {
                totalCart += hotel.price * hotel.nightsNb;
            });
        }
        return totalCart;
    }

    public render(): JSX.Element {
        const { bookedHotels } = this.props;
        const totalCart = this.totalCart();
        let display;

        if (totalCart > 0) {
            display = (
                <React.Fragment>
                    <div className="shopping-cart-list">
                        {bookedHotels.map((hotel, index): any => (
                            <ShoppingCartItem hotel={hotel} key={index} />
                        ))}
                    </div>
                    <Link to="/order">
                        <div className="shopping-cart-total">
                            <div className="shopping-cart-total-label">Total</div>
                            <div className="shopping-cart-total-amount">{totalCart}€</div>
                        </div>
                    </Link>
                </React.Fragment>
            );
        } else {
            display = (
                <React.Fragment>
                    <p>Votre panier est vide.</p>
                </React.Fragment>
            );
        }

        return (
            <div className="shopping-cart">
                <h2>Panier</h2>
                {display}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        bookedHotels: state.bookedHotels
    };
};
export default connect(mapStateToProps)(ShoppingCart);
