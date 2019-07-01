import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HotelItem from './components/hotel-item/hotel-item';
import ShoppingCart from './components/shopping-cart/shopping-cart';

const App: React.FC = () => {
  return (
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
          <HotelItem />
          <HotelItem />
          <HotelItem />
        </section>
        <aside className="aside">
          <ShoppingCart />
        </aside>
      </main>
    </div>
  );
};

export default App;
