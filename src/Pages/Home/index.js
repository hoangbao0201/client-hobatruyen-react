import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Customize from '~/Layout/Customize';
import ListComic from '~/Layout/components/ListComics';

import Sidebar from '~/Layout/components/Sidebar';
import SideFollower from '~/Layout/components/Sidebar/SideFollower';
import SideRank from '~/Layout/components/Sidebar/SideRank';
import SideTopUser from '~/Layout/components/Sidebar/SideTopUser';
import Title from '~/Layout/library/Title';
import FakeApi from '~/assect/FakeApi';
import Pagination from '~/Layout/components/Pagination';

const cx = classNames.bind(styles);

function Home() {
    return (
        <Customize>
            <div className={cx('content', 'col-sm-8')}>
                <Title>Truyện mới cập nhật</Title>
                <ListComic Comics={FakeApi.Comics} />
                <Pagination />
            </div>
            <div className={cx('sidebar', 'col-sm-4')}>
                <Sidebar>
                    <SideFollower />
                    <SideRank />
                    <SideTopUser />
                </Sidebar>
            </div>
        </Customize>
    );
}

export default Home;
