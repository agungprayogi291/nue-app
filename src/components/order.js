import { useNavigate } from "react-router-dom";
function Order(){
    const navigate = useNavigate()
    return(
        <>
        
            <div className="page-top "></div>
            <br></br>
            <div className="content-body">

                <a href="#" className="" onClick={()=> navigate('/products')}> back</a>
                <form className="form mt-5">
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