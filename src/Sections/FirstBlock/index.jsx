import classNames from 'classnames';
import { useState } from 'react';
import NeonTitle from '../../Common/NeonTitle';
import ScrollIndicator from '../../Common/ScrollIndicator';

import style from './style.module.css';

const FirstBlock = () => {
    const [isHidden, setIsHidden] = useState(false)

    window.addEventListener('scroll', function(){ 
    const scrollpos = window.scrollY;

    if(scrollpos > 34){
        setIsHidden(true)
    }
    else {
        setIsHidden(false)
    }
  })

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