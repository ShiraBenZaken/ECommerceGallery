import React from 'react';
import './App.css';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu =()=> {
    document.querySelector(".sidebar").classList.remove("open");
  }


  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to='/'>ARTIB</Link>
        </div>
        <div className="header-links">
          <a href="cart.html">התחבר  |</a>
          <a href="signin.html">|   עגלה</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>סוג התמונה</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">שמן</a>
        </li>
        <li>
          <a href="index.html">אקריליק</a>
        </li>
      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
      </div>
    </main>
    <footer className="footer">
      all right reserved
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
