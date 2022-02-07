import PropTypes from 'prop-types';

import style from './style.module.css';

const SecondBlock = (props) => {

  const dateOfTheDay = new Date().toLocaleString('fr-fr', {  formatMatcher: 'best fit', weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <div className={style.root}>
      <div className={style.dateContainer}>
        <p className={style.dateInfo}>Nous sommes le </p>
        {dateOfTheDay}
      </div>
    </div>
  );
};

SecondBlock.propTypes = {};

export default SecondBlock;
