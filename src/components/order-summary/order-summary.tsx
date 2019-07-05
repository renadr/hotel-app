import React, { Component } from 'react';
import './order-summary.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

interface MyProps {
    bookedHotels: any;
    disabled: boolean;
}

interface MyState {}

class OrderSummary extends Component<MyProps, MyState> {
    public constructor(props) {
        super(props);
    }

    public totalOrder(bookedHotels): any {
        let totalOrder = { nightsNb: 0, totalprice: 0 };
        bookedHotels.forEach((el): any => {
            totalOrder.nightsNb += el.nightsNb;
            totalOrder.totalprice += el.price * el.nightsNb;
        });
        return totalOrder;
    }

    public render(): JSX.Element {
        const { bookedHotels, disabled } = this.props;
        const totalOrder = this.totalOrder(bookedHotels);

        return (
            <div className="order-summary">
                <h2>Récapitulatif de la commande</h2>
                <p>Ci-dessous le récapitulatif de votre commande.</p>
                <ul className="list"></ul>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Hotel</th>
                            <th>Prix / nuit</th>
                            <th>Nombre de nuit(s)</th>
                            <th>Prix total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookedHotels.map((hotel, index): any => (
                            <tr key={index}>
                                <td>{hotel.name}</td>
                                <td>{hotel.price}€</td>
                                <td>{hotel.nightsNb}</td>
                                <td>{hotel.price * hotel.nightsNb}€</td>
                            </tr>
                        ))}
                        <tr className="table-total">
                            <td></td>
                            <td></td>
                            <td>{totalOrder.nightsNb}</td>
                            <td>{totalOrder.totalprice}€</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/confirmation">
                    <button className="btn btn-primary" disabled={disabled}>
                        Valider la commande
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </Link>
            </div>
        );
    }
}

export default OrderSummary;
