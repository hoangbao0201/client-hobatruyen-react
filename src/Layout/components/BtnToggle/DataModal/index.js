import classNames from 'classnames/bind';
import styles from './DataModal.module.scss';

import Search from '~/Layout/components/Header/Search';
import FakeApi from '~/assect/FakeApi';
import { Link } from 'react-router-dom';
import DropDown from '~/Layout/library/DropDown';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DataModal({ onClick }) {
    const [categoryDr, setCategoryDr] = useState(false);
    const [rankDr, setRankDr] = useState(false);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('searchHeader')}>
                <Search />
            </div>
            <ul className={cx('list')}>
                {FakeApi.ListNavbar.map((item, index) => {
                    return (
                        <li className={cx('item')} key={index}>
                            {item.list ? (
                                <>
                                    {item.name === 'Category' && (
                                        <div className={cx('link')} onClick={() => setCategoryDr(!categoryDr)}>
                                            {item.name} {item.fontIcon}
                                        </div>
                                    )}
                                    {item.name === 'Rank' && (
                                        <div className={cx('link')} onClick={() => setRankDr(!rankDr)}>
                                            {item.name} {item.fontIcon}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link onClick={onClick} className={cx('link')} to={item.href}>
                                    {item.name}
                                </Link>
                            )}
                            {item.name == 'Category' && (
                                <div className={cx('dropdownModal')}>
                                    {categoryDr && <DropDown itemData={item.list} className={`${item.name}-modal`} />}
                                </div>
                            )}
                            {item.name == 'Rank' && (
                                <div className={cx('dropdownModal')}>
                                    {rankDr && <DropDown itemData={item.list} className={`${item.name}-modal`} />}
                                </div>
                            )}
                        </li>
                    );
                })}
                <li className={cx('item')}>
                    <Link onClick={onClick} className={cx('link')} to="/login">
                        Đăng nhập
                    </Link>
                </li>
                <li className={cx('item')}>
                    <Link onClick={onClick} className={cx('link')} to="/register">
                        Đăng kí
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default DataModal;
