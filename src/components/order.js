import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './order.css';
function Order(prop){
    const navigate = useNavigate()
    const location = useLocation()
    const position = [52.51, 13.38];
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
                    <div className="row">
                        <div className="col-sm-6">

                            <div className="form-group my-2">
                                <textarea className="form-control form-control-sm" cols="30" rows="10" placeholder="address...">

                                </textarea>
                            </div>
                        </div>
                        <div className="col-sm-6">

                            <div className="container">
                                <div className="map" id="map" >
                                <MapContainer center={position} zoom={6} scrollWheelZoom={true}>
                                    <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={position}>
                                    <Popup>
                                        
                                    </Popup>
                                    </Marker>
                                </MapContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group my-2">
                        <button className="btn btn-dark form-control">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Order;