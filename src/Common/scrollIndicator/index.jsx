import style from './style.module.css';

const ScrollIndicator = () => {
  return (
    <div className={style.mouseScroll}> 
        <span className={style.mouse}>
            <span className={style.mouseMovement}></span>
        </span>
    </div>
  )
};

export default ScrollIndicator