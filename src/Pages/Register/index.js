import classNames from 'classnames/bind';
import styles from './Register.module.scss';

import React, { useEffect } from 'react';
import Customize from '~/Layout/Customize';
import FakeApi from '~/assect/FakeApi';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Register() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <Customize paths={FakeApi.titlePaths.pathRegister}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('header')}>
                        <h2 className={cx('title')}>Đăng ký tài khoản</h2>
                        <div className={cx('space')}></div>
                    </div>
                    <div className={cx('box')}>
                        <div className={cx('text')}>
                            Hiện tại chỉ hỗ trợ đăng ký tài khoản qua tài khoản Facebook hoặc Google
                        </div>
                    </div>
                    <div className={cx('btn-register', 'btn-fb')}>
                        <i className={cx('icon', 'icon-fb')}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </i>
                        <span className={cx('text-btn')}>Đăng kí bằng tài khoản Facebook</span>
                    </div>
                    <div className={cx('btn-register', 'btn-gg')}>
                        <i className={cx('icon', 'icon-gg')}>
                            <FontAwesomeIcon icon={faGoogle} />
                        </i>
                        <span className={cx('text-btn')}>Đăng kí bằng tài khoản Google</span>
                    </div>
                </div>
            </div>
        </Customize>
    );
}

export default Register;
