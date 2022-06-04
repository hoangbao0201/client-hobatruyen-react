import listComic from '~/assect/ListComic';

import classNames from 'classnames/bind';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import DropDown from '~/Layout/library/DropDown';

const cx = classNames.bind(styles);

function Navbar({ id }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <ul className={cx('list-item')}>
                    {listComic.ListNavbar.map((item, index) => {
                        return (
                            <li key={index} className={cx('item', `${item.id === id ? 'active' : ''}`)}>
                                <Link className={cx('link')} to={item.href}>
                                    {item.title}
                                    {item.fontIcon}
                                </Link>
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
