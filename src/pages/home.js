
import Navigation from "../components/navigation";
import Banner from "../components/banner";
import Product from "../components/product";
import Footer from "../components/footer";
import Slide from "../components/slide";
import Description from "../components/description";
import ImageDesc from "../components/imageDesc";
import Maps from "../components/maps";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function Home(){
  useEffect(() =>{
    Aos.init()
  },[])
    return (
        <div className="App">
        <Navigation />
          <section id='body'>
            <Banner />
              <div data-aos='fade-up'>
                <Description />
              </div>
              <div data-aos='fade-up'>
              <Slide />
              </div>
              <ImageDesc />
              <Maps />
          </section>
          <Footer />
    </div>
    )
}

export default Home;