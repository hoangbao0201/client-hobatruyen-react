import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

import FakeApi from '~/assect/FakeApi';

const cx = classNames.bind(styles);

function Pagination() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('grid')}>
                {FakeApi.listPages.map((page, index) => {
                    return (
                        <li className={cx('item')} key={index}>
                            <a className={cx('link')} href={page.href}>
                                {page.indexPage}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Pagination;
