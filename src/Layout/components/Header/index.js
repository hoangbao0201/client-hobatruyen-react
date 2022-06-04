import images from '~/assect/images';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

console.log(images.logo);

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('inner')}>
                    <a href="/" className={cx('link')}>
                        <img className={cx('img')} src={images.logo} alt="Nettruyen" />
                    </a>
                    <div className={cx('grid-accout')}>action</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
