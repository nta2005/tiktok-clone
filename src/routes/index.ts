import config from 'config/index';
import { Home, Following, Profile, Upload, Search } from 'pages';
import { HeaderOnly } from 'layouts';

//Public routes
const publicRoutes = [
	{ path: config.routes.home, component: Home },
	{ path: config.routes.following, component: Following },
	{ path: config.routes.profile, component: Profile },
	{ path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [
	{ path: config.routes.profile, component: Profile },
	{ path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

export { publicRoutes, privateRoutes };
