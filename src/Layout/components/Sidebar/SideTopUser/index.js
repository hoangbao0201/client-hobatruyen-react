import styles from './SideTopUser.module.scss';
import classNames from 'classnames/bind';

import FakeApi from '~/assect/FakeApi';

const cx = classNames.bind(styles);

function SideTopUser() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Top thành viên</div>
            <ul className={cx('list-user')}>
                {FakeApi.listTopUser.map((item, index) => {
                    return (
                        <li key={index} className={cx('grid')}>
                            <span className={cx('rank-num', `top-num-${index + 1}`)}>0{index + 1}</span>
                            <div className={cx('grid-img')} href={item.href}>
                                <img className={cx('img')} src={item.img} alt=""></img>
                            </div>
                            <div className={cx('box-right')}>
                                <div className={cx('name')}>
                                    <span>{item.name}</span>
                                </div>
                                <div>
                                    <span className={cx('level')}>
                                        Cấp {Math.floor(item.rank / 100)}
                                        <span
                                            style={{ width: `${item.rank % 100}%` }}
                                            className={cx('progress-bar')}
                                        ></span>
                                    </span>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideTopUser;
