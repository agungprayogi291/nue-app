import Navigation from "../components/navigation";
import Footer from "../components/footer";
import './contact.css';
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
                        <div className="card bg-light">
                            <div className="card-header">
                                <h5>Call Center</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div className='container py-2'>
                                <a className="btn btn-white  w-100 btnCall"  target href='tel:08989898'><i class="bi bi-telephone"></i> Call</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12 my-4">
                        <div className="card bg-light">
                            <div className="card-header">
                                <h5>Kirim Permintaan</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div className='container py-2'>
                                <button type="button" class="btn btn-white btnSend w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i class="bi bi-send"></i> Kirim Permintaan
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-xs-12 my-4">
                        <div className="card bg-light">
                            <div className="card-header">
                                <h5>Chat service</h5>
                            </div>
                            <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div className="container py-2">
                                <a className="btn btn-white  btnWa btn-call w-100" target='_blank' href="https://wa.me/+62895607601050"> <i class="bi bi-whatsapp"></i> CHAT SEKARANG</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Kirim Permintaan</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <p>Isi Formulir Dan Kami Akan Menghubungi Anda</p>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <input className="form-control form-control-sm my-1" type='text' placeholder="Nama"></input>
                                </div>
                                
                                <div className="col-xs-12 col-sm-6">
                                    <input className="form-control form-control-sm my-1" type='text' placeholder="Nama Belakang"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 col-sm-6">
                                    <input className='form-control form-control-sm my-1' type='email' placeholder='email'></input>
                                </div>
                                <div className="col-xs-12 col-sm-6">
                                    <input className='form-control form-control-sm my-1' type='email' placeholder='Telepone'></input>
                                </div>
                            </div>
                            <div className="row mx-auto">
                                <textarea cols='30' rows='10' className='form-control form-control-sm my-1' placeholder="jalan"></textarea>
                            </div>
                            <p>saya mengakui dan menerima <span className="text-danger">kebijakan privacy</span></p>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;