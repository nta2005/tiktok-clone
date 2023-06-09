import { Home, Following, Profile, Upload, Search } from 'pages';
import { HeaderOnly } from 'components/Layout';

//Public routes
const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/following', component: Following },
	{ path: '/@:nickname', component: Profile },
	{ path: '/search', component: Search, layout: null },
];

const privateRoutes = [
	{ path: '/profile', component: Profile },
	{ path: '/upload', component: Upload, layout: HeaderOnly },
];

export { publicRoutes, privateRoutes };
