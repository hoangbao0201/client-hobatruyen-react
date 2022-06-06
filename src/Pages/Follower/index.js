import classNames from 'classnames/bind';
import styles from './Follower.module.scss';

import Customize from '~/Layout/Customize';
import ListComic from '~/Layout/components/ListComics';

import Sidebar from '~/Layout/components/Sidebar';
import SideRank from '~/Layout/components/Sidebar/SideRank';
import FakeApi from '~/assect/FakeApi';
import Pagination from '~/Layout/components/Pagination';

import React, { useEffect } from 'react';

const cx = classNames.bind(styles);

function Follower() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <Customize paths={FakeApi.titlePaths.pathsFollower}>
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

export default Follower;
