import classNames from 'classnames/bind';
import styles from './Hot.module.scss';

import Customize from '~/Layout/Customize';
import ListComic from '~/Layout/components/ListComics';

import Sidebar from '~/Layout/components/Sidebar';
import SideRank from '~/Layout/components/Sidebar/SideRank';
import Title from '~/Layout/library/Title';
import Pagination from '~/Layout/components/Pagination';

import React, { useEffect } from 'react';

import FakeApi from '~/assect/FakeApi';

const cx = classNames.bind(styles);

function Hot() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <Customize slider paths={FakeApi.titlePaths.pathsHot}>
            <div className={cx('content', 'col-sm-8')}>
                <Title>Truyện hot nhất</Title>
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

export default Hot;
