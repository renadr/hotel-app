import React, { Component } from 'react';
import './shopping-cart.scss';
import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item';
import { connect } from 'react-redux';

interface MyProps {
    bookedHotels: any;
}

interface MyState {}

class ShoppingCart extends Component<MyProps, MyState> {
    // public componentDidUpdate(): void {

    // }

    public totalCart(): number {
        const { bookedHotels } = this.props;
        let totalCart = 0;
        if (bookedHotels.length > 0) {
            bookedHotels.forEach(hotel => {
                totalCart += hotel.price;
            });
        }
        return totalCart;
    }

    public render(): JSX.Element {
        const { bookedHotels } = this.props;
        const totalCart = this.totalCart();

        return (
            <div className="shopping-cart">
                <h2>Panier</h2>
                <div className="shopping-cart-list">
                    {bookedHotels.map((hotel, index) => (
                        <ShoppingCartItem hotel={hotel} key={index} />
                    ))}
                </div>
                <div className="shopping-cart-total">
                    <div className="shopping-cart-total-label">Total</div>
                    <div className="shopping-cart-total-amount">{totalCart}€</div>
                </div>
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
