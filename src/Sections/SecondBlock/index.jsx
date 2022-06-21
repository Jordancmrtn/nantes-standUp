import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import ComedyClubs from "../../data.json"

import style from './style.module.css';

const SecondBlock = (props) => {
  const [coucou, setCoucou] = useState('day')

  const dateOfTheDay = new Date().toLocaleString('fr-fr', { formatMatcher: 'best fit', weekday: 'long', month: 'long', day: 'numeric' });
  const comedyClubsOfTheDay = ComedyClubs.filter(comedyClub => comedyClub.day.includes(new Date().toLocaleString('fr-fr', { formatMatcher: 'best fit', weekday: 'long' })))
  const truc = coucou === "all" ? ComedyClubs : comedyClubsOfTheDay
  return (
    <div className={style.root}>
      <p className={style.dateContainer}>
        {dateOfTheDay}
      </p>
      <div>
        {
          comedyClubsOfTheDay.map(comedyClub => (
            <div>
              {comedyClub.name}
              {comedyClub.adress}
              {comedyClub.instagram}
              {comedyClub.hour}
            </div>
          ))
        }
      </div>
      <button onClick={ () => coucou === "day" ? setCoucou("all") : setCoucou("day") }>TEST POUR CHANGER</button>
      <div style={{height: '400px', width: '100%', marginTop: "32px", backgroundColor: 'gold', overflow: 'hidden'}}>
        <MapContainer center={[47.191, -1.55]} minZoom={14} maxZoom={19} zoom={14} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {
            truc.map(comedyClub => (
            <Marker position={comedyClub.position}>
              <Popup>
                {comedyClub.name}
                  <br/>
                {comedyClub.adress}
              </Popup>
            </Marker>
            ))
          }
        </MapContainer>
        
      </div>
    </div>
  );
};

export default SecondBlock;
