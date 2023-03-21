import './bannercss.css';
function Banner(prop){
    console.log(prop)
    return(
        <>
        <section id='banner'></section>
        <div className='container'>
            <section>
                <div className='wear' data-aos={prop.animate}>
                    <h1 className='text-banner'>Wear the <br />best.</h1>
                </div>
                <div className='row' >
                    <p className="banner-desc text-wrap" data-aos={prop.animate}>Lorem ipsum dolor set amet, lorem ipsum dolor set amet</p>
                    <div id='card-shope-now' data-aos={prop.animate}>
                        <div className='p-3 text-white' id='shope-now'>
                            <h5>Shope Now</h5>
                        </div>
                        <div className='bg-dark text-white p-3'>
                            <h5>See promo </h5>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        </>
    )
}
export default Banner;