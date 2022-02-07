import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import style from './style.module.css';

const Button = ({ icon, outlined, label, iconClassName }) => {
  return <button className={classNames(style.root, {[style.outline]: outlined})}><Icon type={icon} className={iconClassName}/> {label}</button>;
};

Button.propTypes = {
    label: PropTypes.node
};

export default Button;
