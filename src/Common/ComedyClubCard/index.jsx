import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import style from './style.module.css';

const ComedyClubCard = ({ name, address, instagram, tickets, hour, place }) => {
  return (
    <div>
      {name}
      {place}
      {address}
      {instagram && <a href={instagram} target="_blank" rel="noreferrer"><Icon type="INSTAGRAM" color='white' className={style.icon} /></a>}
      {tickets && <a href={tickets} target="_blank" rel="noreferrer"><Icon type="TICKET" color='white' className={style.icon}/></a>}
      {hour}
    </div>
  )
};

ComedyClubCard.propTypes = {
    label: PropTypes.node
};

export default ComedyClubCard;
