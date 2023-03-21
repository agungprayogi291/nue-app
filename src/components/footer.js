import './footer.css';
function Footer(){
    return (
        <footer>
            <div className='container'>

            
                <section className='footer-info'>
                    <div className="row">
                        <div className="col-4">
                            <h4>Quick Link</h4>
                            <p>Home</p>
                            <p>Product</p>
                            <p>Contact</p>
                        </div>
                        <div className="col-4">
                            <h4>Social Media</h4>
                            <p>Instagram</p>
                            <p>Facbook</p>
                            <p>Whatsapp</p>
                        </div>
                        <div className="col-4">
                            <h4 >About</h4>
                            <p>Company</p>
                            <p>Product</p>
                        </div>
                    </div>
                </section>
                <hr />
                <p className='text-center copy-reg'>@agungprayogi</p>
            </div>
        </footer>
    )
}

export default Footer;