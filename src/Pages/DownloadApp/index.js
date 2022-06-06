import classNames from 'classnames/bind';
import styles from './DownloadApp.module.scss';

import Customize from '~/Layout/Customize';

import Sidebar from '~/Layout/components/Sidebar';
import SideRank from '~/Layout/components/Sidebar/SideRank';
import FakeApi from '~/assect/FakeApi';

import React, { useEffect } from 'react';
import Title from '~/Layout/library/Title';
import Data from './Data';

const cx = classNames.bind(styles);

function DownloadApp() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <Customize paths={FakeApi.titlePaths.pathsDownloadApp}>
            <div className={cx('content', 'col-sm-8')}>
                <Data />
            </div>
            <div className={cx('sidebar', 'col-sm-4')}>
                <Sidebar>
                    <SideRank />
                </Sidebar>
            </div>
        </Customize>
    );
}

export default DownloadApp;
