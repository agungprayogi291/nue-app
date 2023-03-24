import Navigation from "../components/navigation";
import Footer from "../components/footer";

function Contact(){
    return(
        <>
            <Navigation bg="bg-light text-dark" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="mb-5"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-12 my-4">
                        <div className="card">
                            <div className="card-header">
                                <h5>Call Center</h5>
                            </div>
                            <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <button className="btn btn-danger btn-call w-100">Call</button>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12 my-4">
                        <div className="card">
                            <div className="card-header">
                                <h5>Kirim Permintaan</h5>
                            </div>
                            <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12 my-4">
                        <div className="card">
                            <div className="card-header">
                                <h5>Chat service</h5>
                            </div>
                            <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;