import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import style from './style.module.css';

const Header = (props) => {

    const [isFixed, setIsFixed] = useState(false)

    window.addEventListener('scroll', function(){ 
    const scrollpos = window.scrollY;

    if(scrollpos > 10){
        setIsFixed(true)
    }
    else {
        setIsFixed(false)
    }
});

  return (
      <div className={`${style.root} ${isFixed ? style.rootScrolled : ''}`}>
        <header className={`${style.header} ${isFixed ? style.fixed : ''}`}>
            <nav>
                <ul>
                    <li>
                        Les lieux
                    </li>
                    <li>
                        Le programme
                    </li>
                    <li>
                        Infos pratiques
                    </li>
                    <Button outlined label="Et ce soir ?" icon="TICKET" className={style.button} iconClassName={style.icon}/>
                </ul>
            </nav>
        </header>
      </div>
  );
};

Header.propTypes = {};

export default Header;
