import classNames from 'classnames/bind';
import styles from './Customize.module.scss';

import Slide from '~/Layout/components/Slide';
import PathTitle from '~/Layout/library/PathTitle';

const cx = classNames.bind(styles);

// const pathsMore = '';

function Customize({ children, slider, paths, pathsMore }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {paths && <PathTitle paths={paths} pathsMore={pathsMore} />}
                {slider && <Slide />}
                <div className={cx('inner')}>{children}</div>
            </div>
        </div>
    );
}

export default Customize;
