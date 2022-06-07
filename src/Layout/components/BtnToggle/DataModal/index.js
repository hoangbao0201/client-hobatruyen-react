import classNames from 'classnames/bind';
import styles from './DataModal.module.scss';

import Search from '~/Layout/components/Header/Search';
import FakeApi from '~/assect/FakeApi';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function DataModal() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('searchHeader')}>
                <Search />
            </div>
            <ul className={cx('list')}>
                {FakeApi.ListNavbar.map((item, index) => {
                    return (
                        <li className={cx('item')} key={index}>
                            <Link className={cx('link')} to={item.href}>
                                {item.name}
                            </Link>
                        </li>
                    );
                })}
                <li className={cx('item')}>
                    <Link className={cx('link')} to="/login">
                        Đăng nhập
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link className={cx('link')} to="/register">
                        Đăng kí
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default DataModal;
