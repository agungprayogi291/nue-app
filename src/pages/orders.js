import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Order from "../components/order";
function Orders(){
    return(
        <>
            <Navigation bg='bg-dark text-white'/>
            <div className="container">
                <Order />
            </div>
       
            
        </>
    )
}
export default Orders;