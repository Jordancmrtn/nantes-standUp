import NeonTitle from '../../Common/NeonTitle';
import ScrollIndicator from '../../Common/ScrollIndicator';

import style from './style.module.css';

const FirstBlock = () => {
  return(
        <div className={style.root}>
            <NeonTitle/>
            <p className={style.subtitle}>Les scènes nantaise !</p>
            <div className={style.scrollIndicatorContainer}>
                <ScrollIndicator/>
            </div>
        </div>
  )
};

export default FirstBlock;