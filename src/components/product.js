// import ban from '../../public/banner.jpg';
import './product.css';
import Navigasi from './navigasi';
import { Form, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';
import {useLocation} from 'react-router-dom';
import category from '../data/category'
function Product(prop){
    const list     = [];
    const navigate = useNavigate()
    const dataCategory = category;
    dataCategory.forEach(element=>{
        const logo = process.env.PUBLIC_URL+"/"+element.logo
        const style ={
            backgroundImage: `url(${logo})`,
            backgroundSize:'cover'
        }
        console.log(process.env.PUBLIC_URL)
        list.push(
  
            <div className='col-6' data-aos='fade-up'>
                <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden" style={style}>
                    <div className="my-3 p-3">
                        <h2 className="display-5 headline-text ">{element.name}</h2>
                        <p className="lead">And an even wittier subheading.</p>
                        <button className='btn btn-dark telusuri' onClick={() => navigate('/category')}>Telusuri ...</button>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto" >
                      
                    </div>
                </div>
            </div>
        )
    })

    useEffect(() =>{
        Aos.init()
    },[])
    return (
        <>
        
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light headline">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">Punny headline</h1>
                    <p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                    <a className="btn btn-outline-secondary" href="#">Coming soon</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>
            <div className='row'>
           {list}
           </div>
        </>
    )   
}


export default Product;