import classNames from 'classnames/bind';
import styles from './SideFollower.module.scss';

import FakeApi from '~/assect/FakeApi';

const cx = classNames.bind(styles);

function SideFollower() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-top')}>
                <span className={cx('comic-fol')}>Truyện đang theo dõi</span>
                <a className={cx('view-all')} href="">
                    Xem tất cả
                </a>
            </div>
            <ul className={cx('grid')}>
                {FakeApi.listComicFol.map((item, index) => {
                    return (
                        <li key={index} className={cx('item')}>
                            <a href={item.href} className={cx('link-img')}>
                                <img className={cx('img')} src={item.img} alt=""></img>
                            </a>
                            <div className={cx('box-right')}>
                                <a className={cx('name')} href="">
                                    <div>{item.name}</div>
                                </a>
                                <div className={cx('chapter')}>
                                    <a href="/">Chapter {item.chapter}</a>
                                    <span>{item.time}</span>
                                </div>
                                <div className={cx('viewNext')}>
                                    {item.viewNext && <a href="">Đọc tiếp Chapter{item.viewNext}</a>}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideFollower;
