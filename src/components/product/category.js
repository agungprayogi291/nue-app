import { useNavigate } from "react-router-dom";
function Category(){
    const navigate = useNavigate();
    return(
        <>
            <div className="container py-5">
                <div className="row text-center text-white mb-5">
                    <div className="col-lg-7 mx-auto">
                        <h1 className="display-4">Product List</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                
                        <ul className="list-group shadow">
                        
                            <li className="list-group-item">
                        
                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div className="media-body order-2 order-lg-1">
                                        <h5 className="mt-0 font-weight-bold mb-2">Apple iPhone XR (Red, 128 GB)</h5>
                                        <p className="font-italic text-muted mb-0 small">128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor</p>
                                        <div className="d-flex align-items-center justify-content-between mt-1">
                                            <h6 className="font-weight-bold my-2">₹64,999</h6>
                                            <ul className="list-inline small">
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                                            </ul>
                                        </div>
                                    </div><img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"></img>
                                    <button className="btn btn-dark text-white " onClick={() => navigate('/product')}>Order now</button>
                                </div> 
                            </li> 
                        
                            <li className="list-group-item">
                            
                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div className="media-body order-2 order-lg-1">
                                        <h5 className="mt-0 font-weight-bold mb-2">Apple iPhone XS (Silver, 64 GB)</h5>
                                        <p className="font-italic text-muted mb-0 small">64 GB ROM | 14.73 cm (5.8 inch) Super Retina HD Display 12MP + 12MP | 7MP Front Camera A12 Bionic Chip Processor</p>
                                        <div className="d-flex align-items-center justify-content-between mt-1">
                                            <h6 className="font-weight-bold my-2">₹99,900</h6>
                                            <ul className="list-inline small">
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            </ul>
                                        </div>
                                    </div><img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"></img>
                                    <button className="btn btn-dark text-white " onClick={() => navigate('/product')}>Order now</button>
                                </div> 
                            </li> 
                            <li className="list-group-item">
                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div className="media-body order-2 order-lg-1">
                                        <h5 className="mt-0 font-weight-bold mb-2">Apple iPhone XS Max (Gold, 64 GB)</h5>
                                        <p className="font-italic text-muted mb-0 small">64 GB ROM | 16.51 cm (6.5 inch) Super Retina HD Display 12MP + 12MP | 7MP Front Camera A12 Bionic Chip Processor</p>
                                        <div className="d-flex align-items-center justify-content-between mt-1">
                                            <h6 className="font-weight-bold my-2">₹1,09,900</h6>
                                            <ul className="list-inline small">
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                                            </ul>
                                        </div>
                                    </div><img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"></img>
                                    <button className="btn btn-dark text-white " onClick={() => navigate('/product')}>Order now</button>
                                </div> 
                            </li> 
                            <li className="list-group-item">
                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div className="media-body order-2 order-lg-1">
                                        <h5 className="mt-0 font-weight-bold mb-2">OnePlus 7 Pro (Almond, 256 GB)</h5>
                                        <p className="font-italic text-muted mb-0 small">Rear Camera|48MP (Primary)+ 8MP (Tele-photo)+16MP (ultrawide)| Front Camera|16 MP POP-UP Camera|8GB RAM|Android pie</p>
                                        <div className="d-flex align-items-center justify-content-between mt-1">
                                            <h6 className="font-weight-bold my-2">₹ 52,999</h6>
                                            <ul className="list-inline small">
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            </ul>
                                        </div>
                                    </div><img src="https://i.imgur.com/6IUbEME.jpg" alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"></img>
                                    <button className="btn btn-dark text-white " onClick={() => navigate('/product')}>Order now</button>
                                </div>
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category;