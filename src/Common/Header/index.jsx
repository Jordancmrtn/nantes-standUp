import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import style from './style.module.css';
import classNames from 'classnames';

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
      <>
        <div className={`${style.rootDesktop} ${isFixed ? style.rootScrolled : ''}`}>
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
        <div className={style.rootMobile}>
                <input className={style.checkbox} type="checkbox" name="" id="" />
                <div className={style.hamburgerLines}>
                    <span className={classNames(style.line, style.line1)}></span>
                    <span className={classNames(style.line, style.line2)}></span>
                    <span className={classNames(style.line, style.line3)}></span>
                </div>  
            <div className={style.menuItems}>
                <li><a href="#">Les lieux</a></li>
                <li><a href="#">Le programme</a></li>
                <li><a href="#">Infos pratiques</a></li>
                <li><Button outlined label="Et ce soir ?" icon="TICKET" className={style.button} iconClassName={style.icon}/></li>
            </div>
        </div>
      </>
  );
};

Header.propTypes = {};

export default Header;
