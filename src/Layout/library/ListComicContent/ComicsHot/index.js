import classNames from 'classnames/bind';
import styles from './ComicsHot.module.scss';

const cx = classNames.bind(styles);

function CommicHot() {
    return (
        <div className={cx('wrapper')}>
            <i className={cx('icon-hot')}></i>
        </div>
    );
}

export default CommicHot;
