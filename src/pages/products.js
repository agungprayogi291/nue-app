import Navigation from "../components/navigation";
import Product from "../components/product";
import Footer from "../components/footer";
function Products(){
    return(
        <>
            <Navigation bg='bg-dark text-white' />
            <br></br>
            <div className="mb-5"></div>
            <section id='body' className="container">
                <Product />
            </section>
            <Footer />
        </>
    )
}

export default Products;