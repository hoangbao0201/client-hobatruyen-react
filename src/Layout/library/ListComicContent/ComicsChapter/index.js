import classNames from 'classnames/bind';
import styles from './ComicsChapter.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ItemChapter({ newChap }) {
    return (
        <ul className={cx('wrapper')}>
            <li className={cx('grid-item')}>
                <Link className={cx('chapter')} to="/">
                    Chapter {newChap}
                </Link>
                <i className={cx('time')}>6 phút trước</i>
            </li>
            <li className={cx('grid-item')}>
                <Link className={cx('chapter')} to="/">
                    Chapter {newChap - 1}
                </Link>
                <i className={cx('time')}>6 phút trước</i>
            </li>
            <li className={cx('grid-item')}>
                <Link className={cx('chapter')} to="/">
                    Chapter {newChap - 2}
                </Link>
                <i className={cx('time')}>6 phút trước</i>
            </li>
        </ul>
    );
}

export default ItemChapter;
