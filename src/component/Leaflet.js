import React from 'react';
import {MapContainer, Polyline, TileLayer} from 'react-leaflet';

const couleur = {color: 'blue'}
const lat = 49.3448;
const lon = -65.3448;
const zoom = 8;

export class Leaflet extends React.Component{
    render()
    {
        const posDep = [lat, lon];
        return(
            <MapContainer center={posDep} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline pathOptions={couleur} positions={[this.props.lesLignes]}/>
            </MapContainer>
        );
    }
}

export default Leaflet;