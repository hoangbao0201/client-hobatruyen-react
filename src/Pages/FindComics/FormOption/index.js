import classNames from 'classnames/bind';
import styles from './FormOption.module.scss';

const cx = classNames.bind(styles);

function FormOption() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('group-box')}>
                <span>Số lượng chapter</span>
                <div className={cx('grid-select')}>
                    <select className={cx('select')}>
                        <option value="0"> &gt; 0 chapter</option>
                        <option value="1"> &gt; 50 chapter</option>
                        <option value="2"> &gt; 100 chapter</option>
                        <option value="3"> &gt; 200 chapter</option>
                        <option value="4"> &gt; 300 chapter</option>
                        <option value="5"> &gt; 400 chapter</option>
                        <option value="6"> &gt; 500 chapter</option>
                    </select>
                </div>
            </div>
            <div className={cx('group-box')}>
                <span>Tình trạng</span>
                <div className={cx('grid-select')}>
                    <select className={cx('select')}>
                        <option value="0">Đang tiến hành</option>
                        <option value="1">Đã hoàn thành</option>
                        <option value="2">Tất cả</option>
                    </select>
                </div>
            </div>
            <div className={cx('group-box')}>
                <span>Dành cho</span>
                <div className={cx('grid-select')}>
                    <select className={cx('select')}>
                        <option value="0">Con gái</option>
                        <option value="1">Con trai</option>
                        <option value="2">Tất cả</option>
                    </select>
                </div>
            </div>
            <div className={cx('group-box')}>
                <span>Số lượng chapter</span>
                <div className={cx('grid-select')}>
                    <select className={cx('select')}>
                        <option value="0">Chapter mới</option>
                        <option value="1">Truyện mới</option>
                        <option value="2">Xem nhiều nhất</option>
                        <option value="3">Xem nhiều nhất tháng</option>
                        <option value="4">Xem nhiều nhất tuần</option>
                        <option value="5">Xem nhiều nhất hôm nay</option>
                        <option value="6">Theo dõi nhiều nhất</option>
                        <option value="7">Bình luận nhiều nhất</option>
                        <option value="8">Số chapter nhiều nhất</option>
                        <option value="9">Theo ABC</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FormOption;
