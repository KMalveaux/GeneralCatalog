// Removed logo import
import './App.css';
import Navbar from './components/Navbar';
import Account from './components/pages/Account';
import Cart from './components/pages/Cart';
import Categories from './components/pages/Categories';
import Deals from './components/pages/Deals';
import Homepage from './components/pages/Homepage';
import Listings from './components/pages/Listings';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Account' element={<Account />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Listings' element={<Listings />} />
          <Route path='/Deals' element={<Deals />} />
          <Route path='/Categories' element={<Categories />} />
        </Routes>
      </div>
    </>

  )
}

export default App;
