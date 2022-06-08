import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

export default Button;
