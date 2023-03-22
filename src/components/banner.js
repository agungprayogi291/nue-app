import './bannercss.css';
function Banner(prop){
   
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
                            <div className='p-3 text-white' id='shope-now'>
                                <h5>Shope Now</h5>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
        </section>
        
        </>
    )
}
export default Banner;