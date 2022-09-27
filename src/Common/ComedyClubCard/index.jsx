import PropTypes from 'prop-types';
import Icon from '../Icon';

import images from './assets'

import style from './style.module.css';

const ComedyClubCard = ({ name, address, instagram, tickets, hour, place, infos, id }) => {
  return (
    <div className={style.cardContainer}>
      <img src={images[id]} alt="test"/>
      <b>{name}{hour && ` - ${hour}`}</b> <br/>
      {place} <br/>
      {address} <br/>
      {infos} <br/>
      <div className={style.instagramAndTicketContainer}>
        {instagram && <a href={instagram} target="_blank" rel="noreferrer"><Icon type="INSTAGRAM" color='white' className={style.icon} /></a>} <br/>
        {tickets &&
          <div className={style.ticketsContainer}>
            <p>Tickets :</p>
            <a href={tickets} target="_blank" rel="noreferrer"><Icon type="TICKET" color='white' className={style.icon} /></a>
          </div>
        }
      </div>
    </div>
  )
};

ComedyClubCard.propTypes = {
    label: PropTypes.node
};

export default ComedyClubCard;
