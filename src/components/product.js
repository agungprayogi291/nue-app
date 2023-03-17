// import ban from '../../public/banner.jpg';
import './product.css';
import Navigasi from './navigasi';
function Product(){
    return (
        <>
            
            <div className="container">
                <Navigasi />
                <div>

                    <div className='row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                        <div className='col my-2'>
                            <div className="card" >
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                          
                        </div>
                        <div className='col my-2'>
                            <div className="card" >
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                          
                        </div>
                        <div className='col my-2'>
                            <div className="card" >
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                          
                        </div>
                        <div className='col my-2'>
                            <div className="card" >
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                          
                        </div>
                        <div className='col my-2'>
                            <div className="card" >
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                          
                        </div>
                        <div className='col my-2'>
                            <div className="card" >
                                <img src={process.env.PUBLIC_URL+"/water-heater.jpg"} className="card-img-top"></img>
                                <div className="card-body">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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