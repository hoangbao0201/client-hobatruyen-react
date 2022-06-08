import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Error.module.scss';

const cx = classNames.bind(styles);

function Error() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1 className={cx('container')}>
                    <span className={cx('text')}>404</span>
                    <div className={cx('title')}>
                        <Link className={cx('link')} to="/">
                            Quay lại trang chủ
                        </Link>
                    </div>
                </h1>
            </div>
        </div>
    );
}

export default Error;
