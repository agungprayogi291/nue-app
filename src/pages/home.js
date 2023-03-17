
import Navigation from "../components/navigation";
import Banner from "../components/banner";
import Product from "../components/product";
import Footer from "../components/footer";
function Home(){
    return (
        <div className="App">
        <Navigation />
          <section id='body'>
            <Banner />
            <Product />
          </section>
          <Footer />
    </div>
    )
}

export default Home;