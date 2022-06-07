import classNames from 'classnames/bind';
import styles from './BtnToggle.module.scss';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import DataModal from './DataModal';

const cx = classNames.bind(styles);

function BtnToggle() {
    const [button, setButton] = useState(true);

    return (
        <div className={cx('wrapper')}>
            {button ? (
                <i className={cx('icon')} onClick={() => setButton((prev) => !prev)}>
                    <FontAwesomeIcon icon={faBars} />
                </i>
            ) : (
                <>
                    <i className={cx('icon')} onClick={() => setButton((prev) => !prev)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </i>
                    <div className={cx('show-dropdown')}>
                        <DataModal />
                    </div>
                </>
            )}
        </div>
    );
}

export default BtnToggle;
