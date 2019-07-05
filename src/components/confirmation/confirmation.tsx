import React, { Component } from 'react';
import './confirmation.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

interface MyProps {
    bookedHotels: any;
    dispatch: any;
}

interface MyState {}

class Confirmation extends Component<MyProps, MyState> {
    public constructor(props) {
        super(props);
    }

    public componentWillMount(): any {
        this.clearCart();
    }

    public clearCart(): void {
        const { dispatch } = this.props;
        const action = { type: 'CLEAR_CART', value: [] };
        dispatch(action);
    }

    public render(): JSX.Element {
        return (
            <div className="confirmation">
                <h1>Votre commande a été effectué avec succès !</h1>
                <p>
                    Retrouvez toutes les informations concernant vos réservations dans votre boîte
                    e-mail.
                </p>
                <p>
                    Présentez-vous à votre hotel avec votre carte d'identité. Passez un bon séjour.
                </p>
                <Link to="/">
                    <button className="btn btn-primary">Retour à l'accueil</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        bookedHotels: state.addToCart
    };
};
export default connect(mapStateToProps)(Confirmation);
