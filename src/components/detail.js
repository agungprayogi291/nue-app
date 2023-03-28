import './detail.css';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
function Detail(){
    const navigate = useNavigate()
    const location = useLocation()
    console.log('tes')
    return(
        <>
            <div className='container mt-5 '>
                <div className="row">
                    <div className="col-xs-12 col-sm-8 " >
                        <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className='img-detail'id='img-detail' ></img>
                    </div>
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <span className="badge badge-secondary badge-pill">3</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Product name</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$12</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Second product</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$8</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <div>
                                <h6 className="my-0">Third item</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span className="text-success">-$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                            </li>
                        </ul>
                        <button className='btn btn-dark text-white w-100' onClick={()=> navigate('/order',{state:{id:1,name:'water heater'}})}>Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Detail;