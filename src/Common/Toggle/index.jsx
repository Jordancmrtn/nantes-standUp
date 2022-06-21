import classNames from 'classnames'

import style from './style.module.css'

const Toggle = ({ checked, onChange }) => {
    console.log(checked);
  return (
    <label className={style.switch}>
        <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)}/>
        <span className={classNames(style.slider, style.round)}></span>
    </label>
  )
}

export default Toggle