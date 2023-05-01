// Removed logo import
import './css/App.css';
// import FlyoutMenu from './components/FlyoutMenu';
import Navbar from './components/Navbar';
import Account from './components/pages/Account';
import Cart from './components/pages/CartPage';
import Categories from './components/pages/Categories';
import Deals from './components/pages/Deals';
import Homepage from './components/pages/Homepage';
import Listings from './components/pages/Listings';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import ListingCreation from './components/pages/ListingCreation';
import "./components/elements/MockCart/MockCart.css";
import "./components/elements/MockListings/MockListings.css";
import { Route, Routes } from 'react-router-dom';
import { ShopContextProvider } from './components/elements/MockListings/mock-shop-context';
import ProductPage from './components/pages/ProductPage';

function App() {
  return (
    <ShopContextProvider>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Account' element={<Account />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Listings' element={<Listings />} />
          <Route path='/Deals' element={<Deals />} />
          <Route path='/Categories' element={<Categories />} />
          <Route path='/Login' element={<Login />} /> 
          <Route path='/Signup' element={<Signup />} /> 
          <Route path='/ListingCreation' element={<ListingCreation />} />
          <Route path='/ProductPage' element={<ProductPage />} />
        </Routes>
      </div>
    </ShopContextProvider>

  )
}

export default App;

