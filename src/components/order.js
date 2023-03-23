import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Order(prop){
    const navigate = useNavigate()
    const location = useLocation()

    return(
        <>
            <div className="page-top "></div>
            <br></br>
            <div className="content-body">
                <a href="#" className="" onClick={()=> navigate('/products')}> back</a>
                <form className="form mt-5">
                    <div className="form-group my-2">
                        <input className='form-control form-control-sm' placeholder="name" type='text' value={location.state.name} disabled></input>
                    </div>
                    <div className="form-group my-2">
                        <input className='form-control form-control-sm' placeholder="name" type='text'></input>
                    </div>
                    <div className="form-group my-2">
                        <input className='form-control form-control-sm' type='email' placeholder="example@gmail.com"></input>
                    </div>
                    <div className="form-group my-2">
                        <textarea className="form-control form-control-sm" cols="30" rows="10" placeholder="address...">

                        </textarea>
                    </div>
                    <div className="form-group my-2">
                        <button className="btn btn-primary form-control">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Order;