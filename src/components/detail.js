import './detail.css';
import { useNavigate } from 'react-router-dom';
function Detail(){
    const navigate = useNavigate()
    return(
        <>
         <div className='container mt-5 '>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 " >
                        <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className='img-detail' ></img>
                    </div>
                    <div className="col-xs-12 col-sm-6 card-detail">
                        <div className='card'>
                            <div className='card-header'>
                            <h1>water heater</h1>
                            </div>
                            <div className='card-body'>
                            <ul>
                            <li>Price : Rp.50.000</li>
                            <li>Stock : 100</li>
                        </ul>
                            </div>
                            <div className='card-footer'>
                            <button class='btn btn-danger form-control' onClick={() => navigate('/order')}>Order</button>
                            </div>
                        </div>
                     
                        
                     
                    </div>
                </div>
            </div>
        </>
    )
}
export default Detail;