import { useNavigate } from "react-router-dom";
import water from '../../images/water.jpeg';
import water5 from '../../images/5.jpeg';
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
                                        <h5 className="mt-0 font-weight-bold mb-2">Product name (28)</h5>
                                        <p className="font-italic text-muted mb-0 small">lorem ipsum (6.1 inch) lorem ipsum dolor | set amet</p>
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
                                    </div><img src={water} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"></img>
                                    <button className="btn btn-dark text-white " onClick={() => navigate('/product')}>Order now</button>
                                </div> 
                            </li> 
                        
                            <li className="list-group-item">
                            
                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div className="media-body order-2 order-lg-1">
                                    <h5 className="mt-0 font-weight-bold mb-2">Product name (28)</h5>
                                        <p className="font-italic text-muted mb-0 small">lorem ipsum (6.1 inch) lorem ipsum dolor | set amet</p>
                                        <div className="d-flex align-items-center justify-content-between mt-1">
                                            <h6 className="font-weight-bold my-2">₹64,999</h6>
                                            <ul className="list-inline small">
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            </ul>
                                        </div>
                                    </div><img src={water} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"></img>
                                    <button className="btn btn-dark text-white " onClick={() => navigate('/product')}>Order now</button>
                                </div> 
                            </li> 
                            <li className="list-group-item">
                                <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                    <div className="media-body order-2 order-lg-1">
                                    <h5 className="mt-0 font-weight-bold mb-2">Product name (28)</h5>
                                        <p className="font-italic text-muted mb-0 small">lorem ipsum (6.1 inch) lorem ipsum dolor | set amet</p>
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
                                    <h5 className="mt-0 font-weight-bold mb-2">Product name (28)</h5>
                                        <p className="font-italic text-muted mb-0 small">lorem ipsum (6.1 inch) lorem ipsum dolor | set amet</p>
                                        <div className="d-flex align-items-center justify-content-between mt-1">
                                            <h6 className="font-weight-bold my-2">₹64,999</h6>
                                            <ul className="list-inline small">
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            </ul>
                                        </div>
                                    </div><img src={water5} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"></img>
                                    <button className="btn btn-dark text-white mx-2" onClick={() => navigate('/product')}>Order now</button>
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