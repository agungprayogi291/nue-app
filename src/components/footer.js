import './footer.css';
import category from '../data/category'
function Footer(prop){
    // console.log(prop)
    const listCategory = [];
    category.forEach(element =>{
        listCategory.push(
            <>
                <p>{element.name}</p>
            </>
        )
    })
    return (
        <footer>
            <div className='container'>
                <section className='footer-info mt-4'>
                    <div className="row">
                        <div className="col-sm-3 col-xs-12">
                            <h4>Product</h4>
                            {listCategory}
                        </div>
                        <div className="col-sm-3 col-xs-12">
                            <h4>Social Media</h4>
                            <p> <i class="bi bi-instagram"></i> Instagram</p>
                            <p> <i class="bi bi-facebook"></i> Facbook</p>
                        </div>
                        <div className="col-sm-3 col-xs-12">
                            <h4 >About</h4>
                            <p>Company</p>
                            <p>Product</p>
                        </div>
                        <div className="col-sm-3 col-xs-12">
                            <h4 >contact</h4>
                            <p> <i class="bi bi-whatsapp"></i> whatsapp</p>
                        </div>
                    </div>
                    <hr />
                    <p className='text-center copy-reg'>@naira unggul abadi</p>
            
                </section>
            </div>
        </footer>
    )
}

export default Footer;