import classNames from 'classnames/bind';
import images from '~/assect/images/logo';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const listTitle = [
    {
        title: 'Truyện tranh',
    },
    {
        title: 'Truyen tranh online',
    },
    {
        title: 'Đọc truyện tranh',
    },
    {
        title: 'Truyện tranh hot',
    },
    {
        title: 'Truyện tranh hot',
    },
    {
        title: 'Truyện tranh hay',
    },
    {
        title: 'Truyện ngôn tình',
    },
    {
        title: 'truyenqq',
    },
    {
        title: 'mi2manga',
    },
    {
        title: 'doctruyen3q',
    },
    {
        title: 'cmanga',
    },
    {
        title: 'vlogtruyen',
    },
    {
        title: 'blogtruyen',
    },
    {
        title: 'saytruyen',
    },
    {
        title: 'dinhtruyen',
    },
    {
        title: 'truyentranhaudio',
    },
    {
        title: 'hamtruyen',
    },
    {
        title: 'truyensieuhay',
    },
    {
        title: 'vcomi',
    },
];

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('row')}>
                <div className={cx('inner')}>
                    <div className={cx('data', 'col-sm-4')}>
                        <a href="/" className={cx('logo')}>
                            <img src={images.logo} alt="Nettruyen" />
                        </a>
                        <div></div>
                        <div>
                            <span>Copyright © 2022 NetTruyen</span>
                        </div>
                    </div>
                    <div className={cx('list-category', 'col-sm-8')}>
                        <div className={cx('title')}>
                            <h4>Từ khóa</h4>
                        </div>
                        <div className={cx('list')}>
                            <ul>
                                {listTitle.map((item, index) => {
                                    return (
                                        <li className={cx('item')} key={index}>
                                            <a className={cx('link')} href="/">
                                                {item.title}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
