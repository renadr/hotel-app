import React, { Component } from 'react';
import './form-personnal-infos.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { faCheck, faEdit } from '@fortawesome/free-solid-svg-icons';

interface MyProps {
    dispatch: any;
}

interface MyState {
    firstname: string;
    lastname: string;
    address: string;
    email: string;
    validate: boolean;
}

class FormPersonnalInfos extends Component<MyProps, MyState> {
    public constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            firstname: '',
            lastname: '',
            address: '',
            email: '',
            validate: false
        };
    }

    public handleChange(event): void {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(({
            [name]: value
        } as unknown) as Pick<MyState, keyof MyState>);
    }

    public invalidate(): void {
        this.setState(
            {
                validate: false
            },
            (): void => this.sendPersonnalInfos()
        );
    }

    public handleSubmit(event): void {
        this.setState(
            {
                validate: true
            },
            (): void => this.sendPersonnalInfos()
        );
        event.preventDefault();
    }

    public sendPersonnalInfos(): void {
        const { dispatch } = this.props;
        const { firstname, lastname, address, email, validate } = this.state;
        const persoInfos = {
            persoInfosIsValid: validate,
            persoInfos: { firstname, lastname, address, email }
        };
        const action = { type: 'CHANGE_PERSO_INFOS', value: persoInfos };
        dispatch(action);
    }

    public render(): JSX.Element {
        const { firstname, lastname, address, email, validate } = this.state;
        let display;

        if (!validate) {
            display = (
                <React.Fragment>
                    <p>Saisissez vos informations personnelles, ci-dessous.</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-custom">
                            <label htmlFor="lastname">Nom</label>
                            <input
                                name="lastname"
                                id="lastname"
                                type="text"
                                value={lastname}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-custom">
                            <label htmlFor="firstname">Prénom</label>
                            <input
                                name="firstname"
                                id="firstname"
                                type="text"
                                value={firstname}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-custom">
                            <label htmlFor="address">Adresse postale</label>
                            <input
                                name="address"
                                id="address"
                                type="text"
                                value={address}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-custom required">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                value={email}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="input-custom required">
                            <button className="btn btn-primary">
                                <FontAwesomeIcon icon={faCheck} />
                                Valider mes informations
                            </button>
                        </div>
                    </form>
                </React.Fragment>
            );
        } else {
            display = (
                <React.Fragment>
                    <ul className="list">
                        <li>
                            <span className="list-label">Nom</span>
                            <span className="list-value">{lastname}</span>
                        </li>
                        <li>
                            <span className="list-label">Prénom</span>
                            <span className="list-value">{firstname}</span>
                        </li>
                        <li>
                            <span className="list-label">Adresse postale</span>
                            <span className="list-value">{address}</span>
                        </li>
                        <li>
                            <span className="list-label">E-mail</span>
                            <span className="list-value">{email}</span>
                        </li>
                    </ul>
                    <button className="btn btn-outline" onClick={(): void => this.invalidate()}>
                        <FontAwesomeIcon icon={faEdit} />
                        Modifier les informations
                    </button>
                </React.Fragment>
            );
        }

        return (
            <div className="form-personnal-infos">
                <h2>Informations personnelles</h2>
                {display}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        bookedHotels: state.addToCart.bookedHotels,
        personnalInfos: state.personnalInfos
    };
};
export default connect(mapStateToProps)(FormPersonnalInfos);
