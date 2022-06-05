import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <span className={cx('text')}>{children}</span>{' '}
                <i className={cx('icon')}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </i>
            </div>
        </div>
    );
}

export default Title;
