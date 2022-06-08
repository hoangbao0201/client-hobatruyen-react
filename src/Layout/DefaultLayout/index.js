import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/Layout/components/Header';
import Footer from '~/Layout/components/Footer';
import Navbar from '~/Layout/components/NavBar';
import ScrollTop from '~/Layout/components/ScollTop';

import React, { useEffect } from 'react';
import Space from '~/Layout/components/Space';

const cx = classNames.bind(styles);

function DefaultLayout({ children, id }) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    const currentUser = false;

    return (
        <div className={cx('wrapper')}>
            <Space currentUser />
            <ScrollTop currentUser />
            <Header currentUser />
            <Navbar id={id} currentUser />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
