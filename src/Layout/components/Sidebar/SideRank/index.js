import classNames from 'classnames/bind';
import styles from './SideRank.module.scss';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FakeApi from '~/assect/FakeApi';

const cx = classNames.bind(styles);

function SideRank() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')}>
                <li className={cx('item', 'active')}>Top Tháng</li>
                <li className={cx('item')}>Top Tuần</li>
                <li className={cx('item')}>Top Ngày</li>
            </ul>
            <ul className={cx('list-comic')}>
                {FakeApi.listTopMonth.map((item, index) => {
                    return (
                        <li key={index} className={cx('grid')}>
                            <span className={cx('rank-num', `top-num-${index + 1}`)}>0{index + 1}</span>
                            <a className={cx('link-img')} href={item.href}>
                                <img className={cx('img')} src={item.img} alt=""></img>
                            </a>
                            <div className={cx('box-right')}>
                                <div className={cx('name')}>
                                    <a href={item.href}>{item.name}</a>
                                </div>
                                <div className={cx('grid-bottom')}>
                                    <span className={cx('chapterNew')}>
                                        <a href={item.href}>Chapter {item.chapter}</a>
                                    </span>
                                    <span className={cx('view')}>
                                        <i>
                                            <FontAwesomeIcon icon={faEye} />
                                        </i>{' '}
                                        <span>{item.view}</span>
                                    </span>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideRank;
