import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import AllProduct from './Component/AllProduct';
import SearchProduct from './Pages/SearchProduct';
import ProductDetail from './Pages/Product_Details';
import ProductByCategory from './Pages/ProductByCategory';
import Cart from './Pages/Cart';


function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<AllProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/category/:cat" element={<ProductByCategory />} />
        <Route path="/product/search/:term" element={<SearchProduct />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
