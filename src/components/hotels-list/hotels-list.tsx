import React, { Component } from 'react';
import './hotels-list.scss';
import HotelItem from '../hotel-item/hotel-item';
import ShoppingCartItem from '../shopping-cart-item/shopping-cart-item';
import { connect } from 'react-redux';
import { Hotel } from '../../global';

interface MyProps {
    hotelsList: Hotel[];
}

interface MyState {}

class HotelsList extends Component<MyProps, MyState> {
    public render(): JSX.Element {
        const { hotelsList } = this.props;

        return (
            <React.Fragment>
                {hotelsList.map((hotel, index): any => (
                    <HotelItem hotel={hotel} key={index} />
                ))}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        bookedHotels: state.bookedHotels
    };
};
export default connect(mapStateToProps)(HotelsList);
