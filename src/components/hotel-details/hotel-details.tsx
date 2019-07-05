import React, { Component } from 'react';
import './hotel-details.scss';
import 'react-dates/initialize';
import { connect } from 'react-redux';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { Hotel, hotelsList } from '../../global';

interface MyProps {
    // hotel: Hotel;
    dispatch: any;
    // bookedHotels: any;
    match: any;
}

interface MyState {
    startDate: any;
    endDate: any;
    focusedInput: any;
    hotel: Hotel;
    nightsNb: number;
}

class HotelDetails extends Component<MyProps, MyState> {
    public constructor(props) {
        super(props);
        this._addHotelNightsToCart = this._addHotelNightsToCart.bind(this);
    }

    public state: MyState = {
        startDate: null,
        endDate: null,
        focusedInput: null,
        hotel: hotelsList[0],
        nightsNb: 0
    };

    public _addHotelNightsToCart(): void {
        const { dispatch } = this.props;
        const { hotel, nightsNb } = this.state;
        hotel['nightsNb'] = nightsNb;
        const action = { type: 'BOOKING', value: hotel };
        dispatch(action);
    }

    public findHotelFromId(id: any): Hotel {
        let hotelSelect: Hotel = hotelsList[0];
        hotelsList.forEach((hotel): any => {
            if (hotel.id == id.id) hotelSelect = hotel;
        });
        return hotelSelect;
    }

    public nightsNb(start, end): number {
        let nightsNb = 0;
        if (start !== null && end !== null) {
            const diffTime = Math.abs(end.toDate().getTime() - start.toDate().getTime());
            nightsNb = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        }
        return nightsNb;
    }

    public componentWillMount(): any {
        const { id }: any = this.props.match.params;
        this.setState({
            hotel: this.findHotelFromId({ id })
        });
    }

    public render(): JSX.Element {
        const { startDate, endDate, focusedInput, hotel, nightsNb } = this.state;
        const disabled = nightsNb === 0;

        return (
            <React.Fragment>
                <div className="hotel-details">
                    <div className="hotel-details-banner">
                        <div
                            style={{
                                backgroundImage: `url(${hotel.imgUrl})`
                            }}
                        />
                    </div>
                    <div className="hotel-details-infos">
                        <div className="hotel-details-infos-name">
                            <h1>{hotel.name}</h1>
                        </div>
                        <div className="hotel-details-infos-price">
                            <span className="hotel-details-infos-price-value">{hotel.price}€</span>
                            <span> / nuits</span>
                        </div>
                        <div className="hotel-details-infos-description">
                            <p>{hotel.description}</p>
                        </div>
                    </div>
                </div>
                <div className="hotel-booking">
                    <div className="hotel-booking-title">
                        <h2>Réserver cet hotel</h2>
                    </div>
                    <div className="hotel-booking-datepicker">
                        <DateRangePicker
                            startDate={startDate}
                            startDateId="a"
                            endDate={endDate}
                            endDateId="b"
                            onDatesChange={({ startDate, endDate }): any =>
                                this.setState({
                                    startDate,
                                    endDate,
                                    nightsNb: this.nightsNb(startDate, endDate)
                                })
                            }
                            focusedInput={focusedInput}
                            onFocusChange={(focusedInput): any => this.setState({ focusedInput })}
                            openDirection="up"
                            startDatePlaceholderText="Début"
                            endDatePlaceholderText="Fin"
                            showClearDates
                            showDefaultInputIcon
                            displayFormat="DD MMM. YYYY"
                        />
                        <button
                            onClick={this._addHotelNightsToCart}
                            className="btn btn-primary"
                            disabled={disabled}
                        >{`Valider ${nightsNb} nuits`}</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state): any => {
    return {
        bookedHotels: state.bookedHotels
    };
};
export default connect(mapStateToProps)(HotelDetails);
