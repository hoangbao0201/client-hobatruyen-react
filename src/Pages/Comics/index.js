import classNames from 'classnames/bind';
import styles from './Comics.module.scss';

import Customize from '~/Layout/Customize';

import Sidebar from '~/Layout/components/Sidebar';
import SideRank from '~/Layout/components/Sidebar/SideRank';

import React, { useEffect, useState } from 'react';

import FakeApi from '~/assect/FakeApi';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFileText, faHeart, faPlus, faRss, faTags, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import Listchapter from '~/Layout/components/Listchapter';

const cx = classNames.bind(styles);

function Comics() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    const params = useParams();

    const comic = FakeApi.Comics.find((comic) => {
        return comic.link === `/truyen-tranh/${params.comicsId}`;
    });

    const [follow, setFollow] = useState(false);

    return (
        <Customize paths={FakeApi.titlePaths.pathsComics} pathsMore={comic}>
            <div className={cx('content', 'col-sm-8')}>
                <div className={cx('name')}>{comic.name}</div>
                <div className={cx('timeUpdate')}>&#91; Cập nhật lúc: {comic.timeNewUpdate} &#93;</div>
                <div className={cx('container')}>
                    <div className={cx('grid-img', 'col-sm-4')}>
                        <div className={cx('pd-img')}>
                            <img className={cx('img')} src={comic.img} alt=""></img>
                        </div>
                    </div>
                    <div className={cx('grid-box', 'col-sm-8')}>
                        <div className={cx('row')}>
                            <div className={cx('title', 'col-sm-4')}>
                                <FontAwesomeIcon icon={faPlus} />
                                <span>Tên khác</span>
                            </div>
                            <div className={cx('info', 'col-sm-8')}>
                                <div>{comic.anotherName || <div className={cx('updating')}>Đang cập nhật</div>}</div>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('title', 'col-sm-4')}>
                                <FontAwesomeIcon icon={faUser} />
                                <span>Tác giả</span>
                            </div>
                            <div className={cx('info', 'col-sm-8')}>
                                <div>{comic.anotherName || <div className={cx('updating')}>Đang cập nhật</div>}</div>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('title', 'col-sm-4')}>
                                <FontAwesomeIcon icon={faRss} />
                                <span>Tình trạng</span>
                            </div>
                            <div className={cx('info', 'col-sm-8')}>
                                <div>{comic.anotherName || <div className={cx('updating')}>Đang cập nhật</div>}</div>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('title', 'col-sm-4')}>
                                <FontAwesomeIcon icon={faTags} />
                                <span>Thể loại</span>
                            </div>
                            <div className={cx('info', 'col-sm-8')}>
                                <div>{comic.anotherName || <div className={cx('updating')}>Đang cập nhật</div>}</div>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('title', 'col-sm-4')}>
                                <FontAwesomeIcon icon={faEye} />
                                <span>Lượt xem</span>
                            </div>
                            <div className={cx('info', 'col-sm-8')}>
                                <div>{comic.view || <div className={cx('updating')}>Đang cập nhật</div>}</div>
                            </div>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('title', 'grid-review')}>
                                <Link className={cx('link-name')} to={comic.link}>
                                    {comic.name}
                                </Link>
                                <span className={cx('text-review')}>{comic.review}</span>
                            </div>
                        </div>
                        <div className={cx('row', 'row-btn')}>
                            {follow ? (
                                <button className={cx('btn', 'follow')} onClick={() => setFollow(!follow)}>
                                    <FontAwesomeIcon icon={faHeart} /> Theo dõi
                                </button>
                            ) : (
                                <button className={cx('btn', 'unFollow')} onClick={() => setFollow(!follow)}>
                                    <FontAwesomeIcon icon={faTimes} /> Bỏ theo dõi
                                </button>
                            )}
                            {comic.follower && <span className={cx('data-text')}> {comic.follower}</span>}
                        </div>
                        <div className={cx('row', 'row-btn')}>
                            <button className={cx('btn', 'btn-read')}>
                                <FontAwesomeIcon icon={faHeart} /> Đọc từ đầu
                            </button>
                            <button className={cx('btn', 'btn-read')}>
                                <FontAwesomeIcon icon={faTimes} /> Đọc mới nhất
                            </button>
                            <button className={cx('btn', 'unFollow')}>
                                <FontAwesomeIcon icon={faTimes} /> Đọc tiếp
                            </button>
                        </div>
                        <div className={cx('row')}>
                            <div className={cx('row-content')}>
                                <FontAwesomeIcon icon={faFileText} />
                                <span>Nội dung</span>
                            </div>
                            {comic.content ? (
                                comic.content
                            ) : (
                                <div>
                                    <Link className={cx('link-content-name')} to={comic.link}>
                                        Truyện tranh {comic.name}{' '}
                                    </Link>
                                    được cập nhật nhanh và đầy đủ nhất tại NetTruyen. Bạn đọc đừng quên để lại bình luận
                                    và chia sẻ, ủng hộ NetTruyen ra các chương mới nhất của truyện
                                    <Link className={cx('link-content-name')} to={comic.link}>
                                        {' '}
                                        {comic.name}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <Listchapter comics={comic} />
                </div>
            </div>
            <div className={cx('sidebar', 'col-sm-4')}>
                <Sidebar>
                    <SideRank />
                </Sidebar>
            </div>
        </Customize>
    );
}

export default Comics;
