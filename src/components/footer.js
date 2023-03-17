import './footer.css';
function Footer(){
    return (
        <footer>
            <div className='container'>

            
                <section className='footer-info'>
                    <div className="row">
                        <div className="col-4">
                            <h4>Quick Link</h4>
                            <ul>
                                <li>Home</li>
                                <li>Product</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h4>Social Media</h4>
                            <ul>
                                <li>Instagram</li>
                                <li>Whatsapp</li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <h4 >About</h4>
                            <ul>

                                <li>Company</li>
                                <li>Product</li>
                                <li>Shopee</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <hr />
                <p className='text-center'>@agungprayogi</p>
            </div>
        </footer>
    )
}

export default Footer;