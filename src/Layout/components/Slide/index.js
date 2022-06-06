import styles from './Slide.module.scss';
import classNames from 'classnames/bind';

import './main.css';

import React from 'react';
import FakeApi from '~/assect/FakeApi';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faClock } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick/lib/slider';
import Title from '~/Layout/library/Title';

const cx = classNames.bind(styles);

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
    >
        <div className={cx('btnSlider')}>
            <FontAwesomeIcon icon={faAngleLeft} />
        </div>
    </button>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')}
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
    >
        <div className={cx('btnSlider')}>
            <FontAwesomeIcon icon={faAngleRight} />
        </div>
    </button>
);

function Slide() {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        swipeToSlide: true,
        speed: 300,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={cx('wrapper')}>
            <Title>Truyện đề cử</Title>
            <div className={cx('container')}>
                <Slider {...settings}>
                    {FakeApi.listSlider.map((item, index) => {
                        return (
                            <div className={cx('item')} key={index}>
                                <div className={cx('grid')}>
                                    <a href={item.link}>
                                        <img className={cx('img')} src={item.img} alt=""></img>
                                        <div className={cx('box')}>
                                            <div className={cx('title')}>{item.name}</div>
                                            <div className={cx('text-bottom')}>
                                                <span className={cx('chapterNew')}>Chapter {item.chapterNew}</span>
                                                <span className={cx('timeNew')}>
                                                    {' '}
                                                    <FontAwesomeIcon icon={faClock} /> {item.timeNew}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
}

export default Slide;
