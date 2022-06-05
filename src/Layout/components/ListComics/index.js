import ItemContent from '~/Layout/library/ListComicContent';

import classNames from 'classnames/bind';
import styles from './Content.module.scss';

const cx = classNames.bind(styles);

function Content({ Comics }) {
    return (
        <div className={cx('wrapper')}>
            {Comics.map((item, index) => {
                return (
                    <div className={cx('item')} key={index}>
                        <ItemContent item={item} />
                    </div>
                );
            })}
        </div>
    );
}

export default Content;
