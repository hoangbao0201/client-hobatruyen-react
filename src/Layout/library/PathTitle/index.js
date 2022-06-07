import classNames from 'classnames/bind';
import styles from './PathTitle.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function PathTitle({ paths, pathsMore }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>
                <li className={cx('item')}>
                    <Link className={cx('link')} to="/">
                        Trang chủ
                    </Link>
                </li>
                {paths.map((path, index) => {
                    return (
                        <li className={cx('item')} key={index}>
                            <Link className={cx('link')} to={path.link}>
                                {path.title}
                            </Link>
                        </li>
                    );
                })}
                {pathsMore && (
                    <li className={cx('item')}>
                        <Link className={cx('link')} to={pathsMore.link}>
                            {pathsMore.name}
                        </Link>
                    </li>
                )}
            </div>
        </div>
    );
}

export default PathTitle;
