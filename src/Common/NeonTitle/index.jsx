import MicLine from '../MicLine';
import style from './style.module.css';

const NeonTitle = () => {
    return( 
        <div className={style.container}>
            <MicLine/>
            <b className={style.root}>
                <span className={style.first}>S</span>ta<span>nd</span>-<span>u</span>p
            </b>
        </div>
    )
};

export default NeonTitle;
