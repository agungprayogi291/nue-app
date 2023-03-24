import { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import './maps.css';

function Maps(){

    return(
        <div className='container parent-map'>

            <div className='container container-maps'>

                <MapContainer center={[51.505, -0.09]} zoom={1}  scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                </MapContainer>
            </div>
        </div>
    )
}

export default Maps;