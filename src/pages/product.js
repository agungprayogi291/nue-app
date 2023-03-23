import Navigation from "../components/navigation";
import Detail from "../components/detail";
import Footer from "../components/footer";
import Slide from "../components/slide";

function Product(){
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