import classNames from 'classnames/bind';
import styles from './Boy.module.scss';

import Customize from '~/Layout/Customize';
import ListComic from '~/Layout/components/ListComics';

import Sidebar from '~/Layout/components/Sidebar';
import SideRank from '~/Layout/components/Sidebar/SideRank';
import FakeApi from '~/assect/FakeApi';
import Pagination from '~/Layout/components/Pagination';

import React, { useEffect } from 'react';
import Title from '~/Layout/library/Title';

const cx = classNames.bind(styles);

function Boy() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <Customize paths={FakeApi.titlePaths.pathsBoy}>
            <div className={cx('content', 'col-sm-8')}>
                <Title>Truyện con trai</Title>
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

export default Boy;
