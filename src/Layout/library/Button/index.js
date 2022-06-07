import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Button;
