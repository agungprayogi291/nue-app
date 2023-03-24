import './imageDesc.css';
import { useNavigate } from 'react-router-dom';
function ImageDesc(){
    const navigate = useNavigate();
    return(
        <>  
            <div className="container py-5">

                <div className="row">
                    <div className="col-sm-4 col-xs-12">
                        <div className="text-center" id='text-desc'>
                            <p className='my-5'>Tempor amet laborum aliqua nisi dolore magna mollit. Ut deserunt commodo nostrud reprehenderit reprehenderit consequat nostrud eu eu reprehenderit magna consectetur anim. Incididunt fugiat cupidatat in consectetur qui Lorem adipisicing. Lorem enim esse occaecat nulla Lorem id excepteur officia ad in enim commodo incididunt ea. Qui officia proident aute non quis velit deserunt irure veniam anim amet sunt elit ipsum. Eiusmod consectetur consectetur sunt laborum.</p>
                            <button className="btn btn-dark text-white my-2 " onClick={() => navigate('/products')}>Telusuri ...<i class="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="col-sm-8 col-xs-12">
                    <div id="img-detail"></div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ImageDesc;