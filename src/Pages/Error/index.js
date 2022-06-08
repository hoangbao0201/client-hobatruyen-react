import classNames from 'classnames/bind';
import styles from './Error.module.scss';

const cx = classNames.bind(styles);

function Error() {
    return <div className={cx('wrapper')}>404</div>;
}

export default Error;
