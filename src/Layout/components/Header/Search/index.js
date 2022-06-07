import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Search({ className }) {
    return (
        <div className={cx('wrapper', className)}>
            <input className={cx('input')} placeholder="Tìm truyện..."></input>
            <button className={cx('btn-search')}>
                <i>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </i>
            </button>
        </div>
    );
}

export default Search;
