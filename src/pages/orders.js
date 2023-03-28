import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Order from "../components/order";
import Checkout from '../components/checkout/checkout';
function Orders(){
    return(
        <>
            <Navigation bg='bg-dark text-white'/>
            <div className="container my-5">
                <div className="row py-3">
                    <Checkout />
                </div>
            </div>
       
            
        </>
    )
}
export default Orders;