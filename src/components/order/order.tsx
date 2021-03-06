import React, { Component } from 'react';
import './order.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import OrderSummary from '../order-summary/order-summary';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import FormPersonnalInfos from '../form-personnal-infos/form-personnal-infos';

interface MyProps {
    bookedHotels: any;
    personnalInfos: any;
}

interface MyState {}

class Order extends Component<MyProps, MyState> {
    public constructor(props) {
        super(props);
    }

    public render(): JSX.Element {
        const { bookedHotels, personnalInfos } = this.props;
        const { persoInfosIsValid } = personnalInfos;
        let display;
        if (bookedHotels.length > 0) {
            display = (
                <React.Fragment>
                    <FormPersonnalInfos />
                    <OrderSummary bookedHotels={bookedHotels} disabled={!persoInfosIsValid} />
                </React.Fragment>
            );
        } else {
            display = <Redirect to="/" />;
        }
        return display;
    }
}

const mapStateToProps = state => {
    return {
        bookedHotels: state.addToCart.bookedHotels,
        personnalInfos: state.personnalInfos
    };
};
export default connect(mapStateToProps)(Order);
