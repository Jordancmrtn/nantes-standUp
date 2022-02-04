import style from './style.module.css';

const NeonTitle = () => {
    return( 
        <b className={style.root}>
            <span className={style.first}>S</span>ta<span>nd</span>-<span>u</span>p
        </b>
    )
};

export default NeonTitle;
