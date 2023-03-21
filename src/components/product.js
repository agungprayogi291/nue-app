// import ban from '../../public/banner.jpg';
import './product.css';
import Navigasi from './navigasi';
import { useNavigate } from 'react-router-dom';
function Product(){
    const navigate = useNavigate()
    return (
        <>
            
            <div className="container">
                <Navigasi/>
                <div>

                    <div className='row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                        <div className='col my-2'>
                            <div className="card" >
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <h4>Name Product</h4>
                                    <h5>Rp. 50.000</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <button className='btn btn-info mx-2' onClick={() => navigate('/product')}> Detail</button>
                                    <button className='btn btn-danger' >Order now</button>
                                </div>
                            </div>
                          
                        </div>
                        <div className='col my-2'>
                            <div className="card" >
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <h4>Name Product</h4>
                                    <h5>Rp. 50.000</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <button className='btn btn-info mx-2' onClick={() => navigate('/product')}> Detail</button>
                                    <button className='btn btn-danger' >Order now</button>
                                </div>
                            </div>
                        </div>
                        <div className='col my-2'>
                            <div className="card" >
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <h4>Name Product</h4>
                                    <h5>Rp. 50.000</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <button className='btn btn-info mx-2' onClick={() => navigate('/product')}> Detail</button>
                                    <button className='btn btn-danger' >Order now</button>
                                </div>
                            </div>
                          
                        </div>
                        <div className='col my-2'>
                            <div className="card" >
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <h4>Name Product</h4>
                                    <h5>Rp. 50.000</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <button className='btn btn-info mx-2' onClick={() => navigate('/product')}> Detail</button>
                                    <button className='btn btn-danger' >Order now</button>
                                </div>
                            </div>
                          
                        </div>
                        <div className='col my-2'>
                            <div className="card" >
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <h4>Name Product</h4>
                                    <h5>Rp. 50.000</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <button className='btn btn-info mx-2' onClick={() => navigate('/product')}> Detail</button>
                                    <button className='btn btn-danger' >Order now</button>
                                </div>
                            </div>
                          
                        </div>
                        <div className='col my-2'>
                            <div className="card" >
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <h4>Name Product</h4>
                                    <h5>Rp. 50.000</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <button className='btn btn-info mx-2' onClick={() => navigate('/product')}> Detail</button>
                                    <button className='btn btn-danger' >Order now</button>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    )   
}


export default Product;