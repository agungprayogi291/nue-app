import './footer.css';
function Footer(){
    return (
        <footer>
            <div className='container'>

                <section className='card'>
                    <div className="row" id='footer-content-card'>

                        <div className="col-4">
                            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias "</p>
                        </div>
                        <div className="col-4">
                            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias"</p>
                        </div>
                        <div className="col-4">
                            <p>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias "</p>
                        </div>
                    </div>
                </section>
                <section className='footer-info'>
                    <div className="row">
                        <div className="col-3">
                            <h4>Quick Link</h4>
                            
                        </div>
                        <div className="col-3">
                            <h4>Service</h4>
                        
                        </div>
                        <div className="col-3">
                            <h4>Social Media</h4>
                        
                        </div>
                        <div className="col-3">
                            <h4>About</h4>
                        
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer;