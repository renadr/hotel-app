import React, { Component } from 'react';
import './App.scss';
import ShoppingCart from './components/shopping-cart/shopping-cart';
import HotelsList from './components/hotels-list/hotels-list';
import { Provider } from 'react-redux';
import Store from './store/configureStore';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

interface Hotel {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    price: number;
}

interface MyProps {}

interface MyState {
    hotelsList: Hotel[];
}

class App extends Component<MyProps, MyState> {
    public state: MyState = {
        hotelsList: [
            {
                id: 1,
                name: 'Hotel de la plage',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quos iste sapiente eius, sed vitae eum possimus illo velit nobis nulla laborum porro exercitationem fugiat autem harum perspiciatis? Vel, quisquam!',
                imgUrl: 'https://s-ec.bstatic.com/images/hotel/max1024x768/292/29259467.jpg',
                price: 120
            },
            {
                id: 2,
                name: 'Ibis Hotel',
                description: 'blabla',
                imgUrl: 'https://t-ec.bstatic.com/images/hotel/max1024x768/857/85736918.jpg',
                price: 200
            },
            {
                id: 3,
                name: 'Hotel Paradis',
                description: 'blabla',
                imgUrl:
                    'https://media-cdn.tripadvisor.com/media/photo-s/0f/e5/0a/6a/paradise-blue-hotel.jpg',
                price: 100
            }
        ]
    };

    public render(): JSX.Element {
        const { hotelsList } = this.state;

        return (
            <Provider store={Store}>
                <Router>
                    <div className="App">
                        <header className="header">
                            <nav className="nav container">
                                <div className="nav-logo">LOGO</div>
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
