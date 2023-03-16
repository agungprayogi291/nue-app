
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navigation from './components/navigation';
import Footer from './components/footer';
import Banner from './components/banner';
function App() {
  return (
    <div className="App">
        <div class='container'>

        <Navigation />
        </div>
        <section id='body'>
         <Banner />
         <div className='container'>

            <section>
                <div className='wear'>
                  <h1>Wear the <br />best.</h1>
                </div>
            </section>
         </div>
        </section>
        <Footer />
    </div>
  );
}

export default App;
