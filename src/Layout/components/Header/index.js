import images from '~/assect/images/logo';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Search from './Search';

const cx = classNames.bind(styles);

function Header() {
    const currentUser = false;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('inner')}>
                    <a href="/" className={cx('link')}>
                        <img className={cx('img')} src={images.logo} alt="Nettruyen" />
                    </a>
                    <Search />
                    <div className={cx('grid-accout')}>
                        {currentUser ? (
                            <div>cá nhân</div>
                        ) : (
                            <div className={cx('accout')}>
                                <Link to="/login" className={cx('login')}>
                                    Đăng nhập
                                </Link>
                                <span className={cx('space')}>|</span>
                                <Link to="/register" className={cx('register')}>
                                    Đăng kí
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
