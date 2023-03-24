import Category from "../components/product/category"
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import { useEffect } from "react";
function CategoryProduct(){
    useEffect(() =>{
        // Aos.init()
        window.scrollTo(0,0)
      },[])
    return (
        <>
            <Navigation />
            <div className="body">

            <Category />
            </div>
            <Footer />
        </>
    )
}

export default  CategoryProduct ;