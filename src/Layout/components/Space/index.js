import classNames from 'classnames/bind';
import styles from './Space.module.scss';

const cx = classNames.bind(styles);

function Space() {
    return <div className={cx('wrapper')}></div>;
}

export default Space;
