import './bannercss.css';
import { useNavigate } from 'react-router-dom';
function Banner(prop){
    const navigate = useNavigate();
    return(
        <>
        <section id='banner'>
            <div className='container container-desc'>
                <section id='container-content-banner'>
                    <div className='wear' data-aos={prop.animate}>
                        <h1 className='text-banner'>Wear the best.</h1>
                    </div>
                    <div className='row' >
                        <div id='card-shope-now' data-aos={prop.animate}>
                            <div className='p-3 ' id='shope-now'>
                                <h5 onClick={() => navigate('/products')}>Shope Now <i class="bi bi-arrow-right"></i></h5>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='discover-banner'>

            </div>
        </section>
        
        </>
    )
}
export default Banner;