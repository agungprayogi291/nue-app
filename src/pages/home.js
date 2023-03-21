
import Navigation from "../components/navigation";
import Banner from "../components/banner";
import Product from "../components/product";
import Footer from "../components/footer";
import Slide from "../components/slide";
function Home(){
    return (
        <div className="App">
        <Navigation />
          <section id='body'>
            <Banner />
            <div className="mt-5">
              <Slide />
            </div>
          </section>
          <Footer />
    </div>
    )
}

export default Home;