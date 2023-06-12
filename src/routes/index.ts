import routesConfig from 'config/routes';
import { Home, Following, Profile, Upload, Search } from 'pages';
import { HeaderOnly } from 'components/Layout';

//Public routes
const publicRoutes = [
	{ path: routesConfig.home, component: Home },
	{ path: routesConfig.following, component: Following },
	{ path: routesConfig.profile, component: Profile },
	{ path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [
	{ path: routesConfig.profile, component: Profile },
	{ path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

export { publicRoutes, privateRoutes };
