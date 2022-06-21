import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import ComedyClubCard from '../../Common/ComedyClubCard';
import Toggle from '../../Common/Toggle';
import ComedyClubs from "../../data.json"

import style from './style.module.css';

const SecondBlock = () => {
  const [checked, setChecked] = useState(false)

  const dateOfTheDay = new Date().toLocaleString('fr-fr', { formatMatcher: 'best fit', weekday: 'long', month: 'long', day: 'numeric' });
  const comedyClubsOfTheDay = ComedyClubs.filter(comedyClub => comedyClub.day.includes(new Date().toLocaleString('fr-fr', { formatMatcher: 'best fit', weekday: 'long' })))
  const comedyClubToDisplay = checked ? ComedyClubs : comedyClubsOfTheDay

  return (
    <section className={style.root}>
      <p>Le programme du</p>
      <div className={style.dateContainer}>
        <p>{dateOfTheDay}</p>
      </div>
      <div className={style.comedyClubCardContainer}>
        {
          comedyClubsOfTheDay.map((comedyClub, id) => (
            <ComedyClubCard key={id} name={comedyClub.name} place={comedyClub.place} instagram={comedyClub.instagram} tickets={comedyClub.tickets} adddress={comedyClub.adddress} hour={comedyClub.hour}/>
          ))
        }
      </div>
      <div className={style.toggleContainer}>
        <p>Afficher tout les comedy clubs</p>
        <Toggle checked={checked} onChange={  () => {setChecked(!checked)}}/>
      </div>
      <div style={{height: '400px', width: '100%', marginTop: "32px", backgroundColor: 'gold', overflow: 'hidden'}}>
        <MapContainer center={[47.191, -1.55]} minZoom={14} maxZoom={19} zoom={14} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            comedyClubToDisplay.map((comedyClub, id) => (
            <Marker position={comedyClub.position} key={id}>
              <Popup>
                {comedyClub.name}
                  <br/>
                {comedyClub.address}
              </Popup>
            </Marker>
            ))
          }
        </MapContainer>
        
      </div>
    </section>
  );
};

export default SecondBlock;
