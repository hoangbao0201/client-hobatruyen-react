import classNames from 'classnames/bind';
import styles from './FindComics.module.scss';

import React, { useEffect, useState } from 'react';
import Customize from '~/Layout/Customize';
import FakeApi from '~/assect/FakeApi';
import Title from '~/Layout/library/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import FormOption from './FormOption';

const cx = classNames.bind(styles);

function FindComics() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    const [BtnEventBox, setBtnEventBox] = useState(true);

    const [dataInfo, setDataInfo] = useState([]);

    const handleBox = () => {
        setBtnEventBox((prev) => !prev);
    };

    const handleFindComics = () => {
        console.log(123);
    };

    console.log(dataInfo);

    return (
        <Customize paths={FakeApi.titlePaths.pathsFindComics}>
            <div className={cx('wrapper')}>
                <Title>Tìm truyện nâng cao</Title>
                <div className="box">
                    <div className={cx('grid-btn')}>
                        <button onClick={handleBox} className={cx('btn', 'btnHandleEvent')}>
                            {BtnEventBox ? <span>Ẩn khung tìm kiếm</span> : <span>Hiện khung tìm kiếm</span>}{' '}
                            {BtnEventBox ? (
                                <FontAwesomeIcon icon={faAnglesUp} />
                            ) : (
                                <FontAwesomeIcon icon={faAnglesDown} />
                            )}
                        </button>
                    </div>
                    {BtnEventBox && (
                        <>
                            <div className={cx('grid-form')}>
                                <h3 className={cx('title', 'col-sm-2')}>Thể loại</h3>
                                <div className={cx('grid-checkbox', 'col-sm-10')}>
                                    <ul className={cx('dropdown')}>
                                        {FakeApi.listCheckBox.map((item, index) => {
                                            return (
                                                <li className={cx('item')} key={index}>
                                                    <div className={cx('row')}>
                                                        <input
                                                            id={`check${index}`}
                                                            className={cx('input')}
                                                            type={'checkbox'}
                                                            onChange={() => setDataInfo((prev) => [...prev, index])}
                                                        />
                                                        <label className={cx('title-check')} htmlFor={`check${index}`}>
                                                            {item.title}
                                                        </label>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                            <FormOption />
                            <button onClick={handleFindComics} className={cx('btn', 'btnFindComics')}>
                                <span>Tìm kiếm</span>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </Customize>
    );
}

export default FindComics;
