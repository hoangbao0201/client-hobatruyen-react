import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import React, { useEffect } from 'react';
import Customize from '~/Layout/Customize';
import { Link } from 'react-router-dom';
import FakeApi from '~/assect/FakeApi';

const cx = classNames.bind(styles);

function Login() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <Customize paths={FakeApi.titlePaths.pathLogin}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('header')}>
                        <h2 className={cx('title')}>Đăng nhập</h2>
                        <div className={cx('space')}></div>
                    </div>
                    <div className={cx('box')}>
                        <div className={cx('text')}>Email</div>
                        <input className={cx('input')}></input>
                    </div>
                    <div className={cx('box')}>
                        <div className={cx('text')}>Mật khẩu</div>
                        <input className={cx('input')}></input>
                    </div>
                    <div className={cx('more')}>
                        <Link to="/forgot-pass" className={cx('link', 'forgot-pass')}>
                            Quên mật khẩu
                        </Link>
                        <Link to="/register-new" className={cx('link', 'register-new')}>
                            Đăng kí mới
                        </Link>
                    </div>
                    <button className={cx('btn-login')}>Đăng nhập</button>
                </div>
            </div>
        </Customize>
    );
}

export default Login;
