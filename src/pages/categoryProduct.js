import Category from "../components/product/category"
import Navigation from "../components/navigation";
import Footer from "../components/footer";
function CategoryProduct(){
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