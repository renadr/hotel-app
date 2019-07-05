import React, { Component } from 'react';
import './App.scss';
import ShoppingCart from './components/shopping-cart/shopping-cart';
import HotelsList from './components/hotels-list/hotels-list';
import HotelDetails from './components/hotel-details/hotel-details';
import { Provider } from 'react-redux';
import Store from './store/configureStore';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { hotelsList, Hotel } from './global';
import FormPersonnalInfos from './components/form-personnal-infos/form-personnal-infos';
import Order from './components/order/order';

interface MyProps {}

interface MyState {}

class App extends Component<MyProps, MyState> {
    public render(): JSX.Element {
        return (
            <Provider store={Store}>
                <Router>
                    <div className="App">
                        <header className="header">
                            <nav className="nav container">
                                <Link to="/">
                                    <div className="nav-logo">LOGO</div>
                                </Link>
                                <div className="nav-profile">
                                    <div className="nav-profile-img" />
                                    <div>John Doe</div>
                                </div>
                            </nav>
                        </header>
                        <main className="main container">
                            <section className="section">
                                <Route
                                    path="/"
                                    exact
                                    render={(): any => <HotelsList hotelsList={hotelsList} />}
                                />
                                <Route path="/hotel/:id" component={HotelDetails} />
                                <Route path="/order" component={Order} />
                            </section>
                            <aside className="aside">
                                <ShoppingCart />
                            </aside>
                        </main>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
