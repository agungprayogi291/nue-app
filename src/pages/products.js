import Navigation from "../components/navigation";
import Product from "../components/product";
import Footer from "../components/footer";
import Slide from "../components/slider/slide";
import Aos from "aos";
import { useEffect } from "react";
import category from '../data/category';
function Products(){
    useEffect(() =>{
        // Aos.init()
        window.scrollTo(0,0)
      },[])
    //   console.log(category)
    return(
        <>
            <Navigation bg='bg-light text-dark' />
            <section id='body'>
                <div className="container mt-5 py-5">
                <Product data={category}/>
                    <div data-aos='fade-up'>
                        <Slide />  
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Products;