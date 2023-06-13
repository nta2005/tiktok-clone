import config from 'config/index';
import { Home, Following, Live,Profile, Upload, Search } from 'pages';
import { HeaderOnly } from 'layouts';

// Public routes
const publicRoutes: any = [
	{ path: config.routes.home, component: Home },
	{ path: config.routes.following, component: Following },
	{ path: config.routes.live, component: Live },
	{ path: config.routes.profile, component: Profile },
	{ path: config.routes.upload, component: Upload, layout: HeaderOnly },
	{ path: config.routes.search, component: Search, layout: null },
];

// Private routes
const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
