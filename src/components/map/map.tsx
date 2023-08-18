import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import { icon } from "leaflet"
import marker from '../../assets/marker.svg'

type MapProperties = {
  position: LatLngExpression,
}


const ICON = icon({
  iconUrl: marker,
  iconSize: [32, 32],
})

function ChangeView({ position } : MapProperties) {

  const map = useMap()
  map.setView(position)
  return null;
}

export default function Map({ position } : MapProperties) {
  // const map = useMap()

  // useEffect(() => {
  //   map.setView(position)
  // }, [position, map])

  return (
    <MapContainer className='min-w-[100vw] h-[calc(100vh-300px)] md:h-[calc(100vh-280px)] z-0' center={position} zoomControl={false} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors <br /> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> | Coded by <a href="#">Igor</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ChangeView position={position} />
      <Marker position={position} icon={ICON}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
