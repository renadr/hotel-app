import React, { Component } from 'react';
import './shopping-cart-item.scss';
import 'react-dates/initialize';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Hotel, hotelsList } from '../../global';

interface MyProps {
    hotel: any;
    dispatch: any;
}

interface MyState {}

class ShoppingCartItem extends Component<MyProps, MyState> {
    public constructor(props) {
        super(props);
        this._removeHotelNightsFromCart = this._removeHotelNightsFromCart.bind(this);
    }

    public _removeHotelNightsFromCart(): void {
        const { hotel, dispatch } = this.props;
        const action = { type: 'REMOVE_BOOKING', value: hotel };
        dispatch(action);
    }

    public render(): JSX.Element {
        const { hotel } = this.props;
        return (
            <div className="shopping-cart-item">
                <div
                    className="shopping-cart-item-remove"
                    onClick={this._removeHotelNightsFromCart}
                >
                    <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className="shopping-cart-item-content">
                    <div className="shopping-cart-item-name">
                        <p>{hotel.name}</p>
                    </div>
                    <div className="shopping-cart-item-price">
                        <p className="shopping-cart-item-price-value">
                            {hotel.price * hotel.nightsNb}€
                        </p>
                        <p className="shopping-cart-item-price-text">{`${hotel.nightsNb} nuits`}</p>
                    </div>
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
export default connect(mapStateToProps)(ShoppingCartItem);
