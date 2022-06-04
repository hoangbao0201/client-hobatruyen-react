import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/Layout/components/Header';
import Footer from '~/Layout/components/Footer';
import Navbar from '~/Layout/components/NavBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children, id }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navbar id={id} />
            {children}
            <Footer />
        </div>
    );
}

export default DefaultLayout;
