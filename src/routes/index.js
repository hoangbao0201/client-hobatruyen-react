// Pages
import Follower from '~/Pages/Follower';
import Home from '~/Pages/Home';
import Hot from '~/Pages/Hot';
import History from '~/Pages/History';
import Girl from '~/Pages/Girl';
import Boy from '~/Pages/Boy';
import DownloadApp from '~/Pages/DownloadApp';
import Login from '~/Pages/Login';
import Register from '~/Pages/Register';
import FindComics from '~/Pages/FindComics';
import Comics from '~/Pages/Comics';
import Error from '~/Pages/Error';

// Public routes
const publicRoutes = [
    { path: '/', component: Home, id: 1 },
    { path: '/hot', component: Hot, id: 2 },
    { path: '/theo-doi', component: Follower, id: 3 },
    { path: '/lich-su', component: History, id: 4 },
    { path: '/tim-truyen-nang-cao', component: FindComics, id: 7 },
    { path: '/con-gai', component: Girl, id: 8 },
    { path: '/con-trai', component: Boy, id: 9 },
    { path: '/tai-app', component: DownloadApp, id: 10 },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/truyen-tranh/:comicsId', component: Comics },
    { path: '*', component: Error },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
