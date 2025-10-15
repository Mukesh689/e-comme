import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Create from './pages/Create';
import Navigation from './pages/Navigation';
import Product from './cart/Product';
import Addcart from './cart/Cart';
import { CartProvider } from './cart/CartContext';
import ProductDetail from './pages/ProductDetail';
import Paymentdetail from './cart/Paymentdetail';

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

function Layout() {
  const location = useLocation();
  const hiddenNavbarPaths = ['/login', '/create'];
  const shouldHideNavbar = hiddenNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navigation />}
      <CartProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Addcart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/paymentdetail" element={<Paymentdetail />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
