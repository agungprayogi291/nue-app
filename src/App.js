
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './pages/home';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Products from './pages/products';
import Contact from './pages/contact';
import Product from './pages/product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
