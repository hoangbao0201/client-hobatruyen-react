import classNames from 'classnames/bind';
import styles from './Listchapter.module.scss';
import RowList from './RowList';

const cx = classNames.bind(styles);

const HandleListChap = ({ comics }) => {
    const currentChap = comics.chapterNew;
    console.log(currentChap);

    // while (currentChap >= 1) {
    // currentChap--;
    return <RowList currentChap={currentChap} />;
    // }
};

function Listchapter({ comics }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <div className={cx('row')}>
                        <div className={cx('col-sm-5')}>Số chương</div>
                        <div className={cx('col-sm-4')}>Cập nhật</div>
                        <div className={cx('col-sm-3')}>Xem</div>
                    </div>
                </div>
                {/* <div className={cx('container')}>
                    {comics.map((comic, index) => {
                        return (
                            <div className={cx('row')}>
                                <div className={cx('col-sm-5', 'numChap')}>{comic.chapterNew - index}</div>
                                <div className={cx('col-sm-4', 'upDate')}>{comic.chapter}</div>
                                <div className={cx('col-sm-3', 'view')}>{comic.view}</div>
                            </div>
                        );
                    })}
                </div> */}
                <div className={cx('container')}>
                    <HandleListChap comics={comics} />
                </div>
            </div>
        </div>
    );
}

export default Listchapter;
