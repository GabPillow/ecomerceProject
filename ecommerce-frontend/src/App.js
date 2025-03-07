import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Header from './Header'
import GameShow from './pages/GameShow/GameShow';
import LoginPage from './pages/LoginPage/LoginPage';
import CartPage from './pages/CartPage/CartPage';
import OrdersPage from './pages/OrdersPage/OrdersPage';
import NavBar from './components/NavBar';
import WishlistPage from './pages/WishlistPage/WishlistPage';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Router>
          <Header />
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game/:id" element={<GameShow />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Routes>
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
