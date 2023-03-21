// import ban from '../../public/banner.jpg';
import './product.css';
import Navigasi from './navigasi';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';
// import * as Icon from 'bootstrap-icons';
function Product(){
    const navigate = useNavigate()
    useEffect(() =>{
        Aos.init()
      },[])
    return (
        <>
            
            <div className="container">
                <Navigasi/>
                <div>
                    <div className='input-group'>
                        <input className='form-control form-control-sm' placeholder='Search product...'></input>
                        <button class='btn btn-dark btn-sm'><i class="bi bi-search"></i></button>
                    </div>
                    <div className='row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                        <div className='col my-2' data-aos='fade-up'>
                            <div className="card" >
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <h4>Name Product</h4>
                                    <h5>Rp. 50.000</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <button className='btn btn-info mx-2' onClick={() => navigate('/product')}> Detail</button>
                                    <button className='btn btn-danger' onClick={() =>navigate('/order')}>Order now</button>
                                </div>
                            </div>
                          
                        </div>
                        <div className='col my-2' >
                            <div className="card" data-aos='fade-up'>
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <h4>Name Product</h4>
                                    <h5>Rp. 50.000</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <button className='btn btn-info mx-2' onClick={() => navigate('/product')}> Detail</button>
                                    <button className='btn btn-danger' onClick={() =>navigate('/order')}>Order now</button>
                                </div>
                            </div>
                        </div>
                        <div className='col my-2'>
                            <div className="card" data-aos='fade-up' data-aos-easing="ease-in-sine" data-aos-duration="600">
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <h4>Name Product</h4>
                                    <h5>Rp. 50.000</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <button className='btn btn-info mx-2' onClick={() => navigate('/product')}> Detail</button>
                                    <button className='btn btn-danger' onClick={() =>navigate('/order')}>Order now</button>
                                </div>
                            </div>
                          
                        </div>
                        <div className='col my-2'>
                            <div className="card" data-aos='fade-up'>
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <h4>Name Product</h4>
                                    <h5>Rp. 50.000</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <button className='btn btn-info mx-2' onClick={() => navigate('/product')}> Detail</button>
                                    <button className='btn btn-danger' onClick={() =>navigate('/order')} >Order now</button>
                                </div>
                            </div>
                          
                        </div>
                        <div className='col my-2'>
                            <div className="card" data-aos='fade-up'  data-aos-easing="ease-in-sine" data-aos-duration="600">
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <h4>Name Product</h4>
                                    <h5>Rp. 50.000</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <button className='btn btn-info mx-2' onClick={() => navigate('/product')}> Detail</button>
                                    <button className='btn btn-danger' onClick={() =>navigate('/order')} >Order now</button>
                                </div>
                            </div>
                          
                        </div>
                        <div className='col my-2'>
                            <div className="card" data-aos='fade-up'>
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <h4>Name Product</h4>
                                    <h5>Rp. 50.000</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <div className='card-footer d-flex justify-content-end'>
                                    <button className='btn btn-info mx-2' onClick={() => navigate('/product')}> Detail</button>
                                    <button className='btn btn-danger' onClick={() =>navigate('/order')}>Order now</button>
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