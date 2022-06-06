import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';

import FakeApi from '~/assect/FakeApi';
import { Link } from 'react-router-dom';
import DropDown from '~/Layout/library/DropDown';

const cx = classNames.bind(styles);

function Navbar({ id }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ul className={cx('list-item')}>
                    {FakeApi.ListNavbar.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={cx(
                                    'item',
                                    `${item.id === id ? 'active' : ''}`,
                                    `${item.id >= 8 ? 'rps-dpl-none' : ''}`,
                                )}
                            >
                                {item.id === 11 ? (
                                    <a target="_blank" className={cx('link', 'bao')} href={item.href}>
                                        {item.title}
                                        {item.fontIcon}
                                    </a>
                                ) : (
                                    <Link className={cx('link')} to={`${item.list ? '#' : item.href}`}>
                                        {item.title}
                                        {item.fontIcon}
                                    </Link>
                                )}
                                <div className={cx('dropdown')}>
                                    {item.list && <DropDown itemData={item.list} className={item.name} />}
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
