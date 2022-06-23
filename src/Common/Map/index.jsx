import PropTypes from 'prop-types'
import Toggle from '../Toggle'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import style from './style.module.css'

const Map = ({comedyClubToDisplay, checked, setChecked}) => {
  return (
    <div className={style.mapContainer}>
      <div className={style.toggleContainer}>
        <p>Afficher tout les comedy clubs</p>
        <Toggle checked={checked} onChange={  () => {setChecked(!checked)}}/>
      </div>
        <MapContainer center={[47.191, -1.55]} minZoom={14} maxZoom={18} zoom={14} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            comedyClubToDisplay.map((comedyClub, id) => (
            <Marker position={comedyClub.position} key={id}>
              <Popup>
                <b>{comedyClub.name}</b>
                  <br/>
                <i>{comedyClub.place}</i>
                  <br />
                {comedyClub.address}
              </Popup>
            </Marker>
            ))
          }
        </MapContainer>
      </div>
  )
}

Map.propTypes = {
    comedyClubToDisplay: PropTypes.object
}

export default Map