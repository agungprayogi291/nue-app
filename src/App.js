
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navigation from './components/navigation';
import Footer from './components/footer';
import Banner from './components/banner';
import Products from './pages/products';
function App() {
  return (
    <div className="App">
        <Navigation />
          <section id='body'>
          <Banner />
          <Products />
          </section>
        <Footer />
    </div>
  );
}

export default App;
