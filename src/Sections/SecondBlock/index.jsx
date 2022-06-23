import { useState } from 'react';
import ComedyClubCard from '../../Common/ComedyClubCard';
import Map from '../../Common/Map';
import Toggle from '../../Common/Toggle';
import ComedyClubs from "../../data.json";


import style from './style.module.css';

const SecondBlock = () => {
  const [checked, setChecked] = useState(false)

  const dateOfTheDay = new Date().toLocaleString('fr-fr', { formatMatcher: 'best fit', weekday: 'long', month: 'long', day: 'numeric' });
  const comedyClubsOfTheDay = ComedyClubs.filter(comedyClub => comedyClub.day.includes(new Date().toLocaleString('fr-fr', { formatMatcher: 'best fit', weekday: 'long' })))
  const comedyClubToDisplay = checked ? ComedyClubs : comedyClubsOfTheDay

  return (
    <section className={style.root}>
      <div className={style.dateContainer}>
        <p className={style.catchline}>Et ce soir ?</p>
        <div className={style.date}>
          <p>{dateOfTheDay}</p>
        </div>
      </div>
      <div className={style.comedyClubCardContainer}>
        {
          comedyClubsOfTheDay.map((comedyClub, id) => (
            <ComedyClubCard key={id} name={comedyClub.name} place={comedyClub.place} instagram={comedyClub.instagram} tickets={comedyClub.tickets} address={comedyClub.address} hour={comedyClub.hour} info={comedyClub.info}/>
          ))
        }
      </div>
      <Map comedyClubToDisplay={comedyClubToDisplay} setChecked={setChecked} checked={checked} />
    </section>
  );
};

export default SecondBlock;
