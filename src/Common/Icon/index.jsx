import PropTypes from 'prop-types';
import classNames from 'classnames';

import icons from './icons';

import style from './style.module.css';

export const Icon = ({ type, color = 'currentColor', title = '', spin = false, className = '', onClick = null }) => {
    const icon = icons[type];
    const iClassName = classNames({ [style.clickable]: onClick, [style.spin]: spin }, style.icon, className);

    if (icon) {
        const { Icon, iconStyle } = icon;
        return <Icon className={iClassName} style={iconStyle(color)} title={title} onClick={onClick} />;
    }

    return null;
};

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons)).isRequired,
  color: PropTypes.string,
  title: PropTypes.string,
  spin: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
