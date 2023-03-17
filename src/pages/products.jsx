// import ban from '../../public/banner.jpg';
import './product.css';
import Navigasi from './navigasi';
function Products(){
    return (
        <>
         <Navigasi />
            <section>
                <div className="container">

                    <div className='row'>
                        <div className='col'>
                            <div className='card'>
                                <div className="card-body">
                                    <img src={process.env.PUBLIC_URL+"/logo192.png" } alt="" className="image-product"/>
                                </div>
                                <div className="card-footer">
                                    <h5>Name prouct</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <div className="card-body">
                                <img src={process.env.PUBLIC_URL+"/logo192.png" } alt="" className="image-product" />
                                </div>
                                <div className="card-footer">
                                    <h5>Name prouct</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card'>
                                <div className="card-body">
                                <img src={process.env.PUBLIC_URL+"/logo192.png" } alt=""  className="image-product"/>
                                </div>
                                <div className="card-footer">
                                    <h5>Name prouct</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )   
}


export default Products;