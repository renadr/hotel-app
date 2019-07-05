import React, { Component } from 'react';
import './hotel-item.scss';
import 'react-dates/initialize';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

interface Hotel {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    price: number;
}

interface MyProps {
    hotel: Hotel;
    dispatch: any;
    bookedHotels: any;
}

interface MyState {
    startDate: any;
    endDate: any;
    focusedInput: any;
}

class HotelItem extends Component<MyProps, MyState> {
    public constructor(props) {
        super(props);
        this._addFavoriteToCart = this._addFavoriteToCart.bind(this);
    }

    public state: MyState = {
        startDate: null,
        endDate: null,
        focusedInput: null
    };

    public _addFavoriteToCart(): void {
        const { hotel, dispatch } = this.props;
        const action = { type: 'BOOKING', value: hotel };
        dispatch(action);
    }

    public render(): JSX.Element {
        const { hotel } = this.props;
        const { startDate, endDate, focusedInput } = this.state;
        const link = `/hotel/${hotel.id}`;

        return (
            <Link to={link}>
                <div className="hotel-item">
                    <div className="hotel-item-overview">
                        <div className="hotel-item-image">
                            <div style={{ backgroundImage: `url(${hotel.imgUrl})` }} />
                        </div>
                        <div className="hotel-item-description">
                            <div className="hotel-item-description-top">
                                <div className="hotel-item-description-top-name">
                                    <h2>{hotel.name}</h2>
                                </div>
                                <div className="hotel-item-description-top-price">
                                    <p className="hotel-item-description-top-price-value">
                                        {hotel.price}€
                                    </p>
                                    <p className="hotel-item-description-top-price-text">
                                        prix/nuit
                                    </p>
                                </div>
                            </div>
                            <div className="hotel-item-description-bottom">
                                <p>{hotel.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-item-date-picker">
                        <DateRangePicker
                            startDate={startDate} // momentPropTypes.momentObj or null,
                            startDateId="a" // PropTypes.string.isRequired,
                            endDate={endDate} // momentPropTypes.momentObj or null,
                            endDateId="b" // PropTypes.string.isRequired,
                            onDatesChange={({ startDate, endDate }) =>
                                this.setState({ startDate, endDate })
                            } // PropTypes.func.isRequired,
                            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        />
                    </div>
                </div>
            </Link>
        );
    }
}

const mapStateToProps = state => {
    return {
        bookedHotels: state.bookedHotels
    };
};
export default connect(mapStateToProps)(HotelItem);
