import { faComment, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import ItemChapter from './ComicsChapter';
import ComicHot from './ComicsHot';

import classNames from 'classnames/bind';
import styles from './ComicsContent.module.scss';
import Skeleton from 'react-loading-skeleton';

const cx = classNames.bind(styles);

function ItemContent({ item }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid-image')}>
                {item.hot && <ComicHot />}
                <Link to={item.link} className={cx('link-img')}>
                    {<img className={cx('img')} src={item.img} alt=""></img> || <Skeleton />}
                    <div className={cx('box-bottom')}>
                        <div className={cx('box-bottom-text')}>
                            <i>
                                <FontAwesomeIcon icon={faEye} />
                            </i>
                            {item.view}
                            <i>
                                <FontAwesomeIcon icon={faHeart} />
                            </i>
                            {item.heart}
                            <i>
                                <FontAwesomeIcon icon={faComment} />
                            </i>
                            {item.comment}
                        </div>
                    </div>
                </Link>
            </div>
            <div className={cx('box-list-chap')}>
                <Link className={cx('name-link')} to={item.link}>
                    {item.name}
                </Link>
                <ItemChapter newChap={item.chapterNew} />
            </div>
        </div>
    );
}

export default ItemContent;
