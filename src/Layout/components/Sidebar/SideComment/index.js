import classNames from 'classnames/bind';
import styles from './SideComment.module.scss';

const cx = classNames.bind(styles);

function SideComment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Bình luận mới</div>
            {/* <ul className={cx('list-user')}>
                {listTopUser.map((item, index) => {
                    return (
                        <li key={index} className={cx('grid')}>
                            
                        </li>
                    );
                })}
            </ul> */}
        </div>
    );
}

export default SideComment;
