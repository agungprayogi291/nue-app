
import Navigation from "../components/navigation";
import Banner from "../components/banner/banner";
import Product from "../components/product";
import Footer from "../components/footer";
import Slide from "../components/slider/slide";
import Description from "../components/description";
import ImageDesc from "../components/imageDesc";
import Maps from "../components/maps";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import  category from '../data/category';
function Home(){
  useEffect(() =>{
    Aos.init()
    window.scrollTo(0,0)
  },[])
    return (
        <div className="App">
        <Navigation data={category}/>
          <section id='body'>
            <Banner />
              <div data-aos='fade-up'>
                <Description />
              </div>
              <ImageDesc />
           
              <div data-aos='fade-up'>
              <Slide use="true" />
              </div>
             
            
          </section>
          <Footer data={category}/>
    </div>
    )
}

export default Home;