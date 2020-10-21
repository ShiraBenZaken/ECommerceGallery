import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu =()=> {
    document.querySelector(".sidebar").classList.remove("open");
  }




  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <a href="index.html">ARTIB</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart  |</a>
          <a href="signin.html">|   Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">oil</a>
        </li>
        <li>
          <a href="index.html">blabla</a>
        </li>
      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="./images/house.jpg" alt="products"></img>
              <div className="product-name" >
                <a href="product.html">Nice House</a>
              </div>
              <div className="poroduct-brand">Nike</div>
              <div className="product-price">100$</div>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <footer className="footer">
      all right reserved
    </footer>
  </div>
  );
}

export default App;
