import classNames from 'classnames/bind';
import styles from './RowList.module.scss';

const cx = classNames.bind(styles);

function RowList({ currentChap }) {
    return (
        <div className={cx('container')}>
            <div className={cx('row')}>
                <div className={cx('col-sm-5', 'numChap')}>{currentChap + 1}</div>
                <div className={cx('col-sm-4', 'upDate')}>{currentChap}</div>
                <div className={cx('col-sm-3', 'view')}>{currentChap}</div>
            </div>
        </div>
    );
}

export default RowList;
