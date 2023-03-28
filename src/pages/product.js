import Navigation from "../components/navigation";
import Detail from "../components/detail";
import Footer from "../components/footer";
import Slide from "../components/slider/slide";
import { useEffect } from "react";
import useLocation from 'react-router-dom';
function Product(){
    useEffect(() =>{
        // Aos.init()
        window.scrollTo(0,0)
      },[])
    return (
        <>
            <Navigation bg='bg-light text-dark' />
            <br></br>
            <br></br>
            <br></br>
            <Detail />
            <hr></hr>
            <Slide />
           <Footer />
        </>
    )
}

export default Product;