import classNames from 'classnames/bind';
import styles from './History.module.scss';

import Customize from '~/Layout/Customize';
import ListComic from '~/Layout/components/ListComics';

import Sidebar from '~/Layout/components/Sidebar';
import SideRank from '~/Layout/components/Sidebar/SideRank';
import FakeApi from '~/assect/FakeApi';
import Pagination from '~/Layout/components/Pagination';

import React, { useEffect } from 'react';

const cx = classNames.bind(styles);

function History() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <Customize paths={FakeApi.titlePaths.pathsHistory}>
            <div className={cx('content', 'col-sm-8')}>
                <ListComic Comics={FakeApi.Comics} />
                <Pagination />
            </div>
            <div className={cx('sidebar', 'col-sm-4')}>
                <Sidebar>
                    <SideRank />
                </Sidebar>
            </div>
        </Customize>
    );
}

export default History;
