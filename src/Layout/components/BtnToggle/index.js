import classNames from 'classnames/bind';
import styles from './BtnToggle.module.scss';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import DataModal from './DataModal';

const cx = classNames.bind(styles);

function BtnToggle() {
    const [handleToggle, setHandleToggle] = useState(true);

    const handlePaths = () => {
        setHandleToggle(!handleToggle);
    };

    return (
        <div className={cx('wrapper')}>
            {handleToggle ? (
                <i className={cx('icon')} onClick={() => setHandleToggle(!handleToggle)}>
                    <FontAwesomeIcon icon={faBars} />
                </i>
            ) : (
                <>
                    <i className={cx('icon')} onClick={() => setHandleToggle(!handleToggle)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </i>
                    <div className={cx('show-dropdown')}>
                        <DataModal onClick={handlePaths} />
                    </div>
                </>
            )}
        </div>
    );
}

export default BtnToggle;
