import classNames from 'classnames/bind';
import styles from './Customize.module.scss';

const cx = classNames.bind(styles);

function Customize({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('inner')}>{children}</div>
            </div>
        </div>
    );
}

export default Customize;
