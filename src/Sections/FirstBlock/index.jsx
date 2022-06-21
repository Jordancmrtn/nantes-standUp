import classNames from 'classnames';
import { useEffect, useState } from 'react';
import NeonTitle from '../../Common/NeonTitle';
import ScrollIndicator from '../../Common/ScrollIndicator';

import style from './style.module.css';

const FirstBlock = () => {
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
      const handleHideScrollIndicator = () => {
        const scrollpos = window.scrollY;
        scrollpos > 34 ? setIsHidden(true) : setIsHidden(false)
      }
      
      window.addEventListener('scroll', handleHideScrollIndicator)
      return () => window.removeEventListener("scroll", handleHideScrollIndicator);
    }, [])

  return(
        <div className={style.root}>
            <NeonTitle/>
            <p className={style.subtitle}>Les scènes nantaises !</p>
            <div className={classNames(style.scrollIndicatorContainer, {[style.hidden]: isHidden})}>
              <ScrollIndicator/>
            </div>
        </div>
  )
};

export default FirstBlock;