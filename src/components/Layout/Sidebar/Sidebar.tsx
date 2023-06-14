import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from 'config';
import { Icons, SuggestedAccounts } from 'components';
import { SidebarMenu, SidebarMenuItem } from './Menu';
import UserApi from 'api/userApi';

const cx = classNames.bind(styles);

const Sidebar: React.FC = () => {
	const [suggetestedUsers, setSuggetestedUsers] = useState<any>([]);

	useEffect(() => {
		UserApi.getSuggested()
			.then((res) => setSuggetestedUsers(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<aside className={cx('wrapper')}>
			<SidebarMenu>
				<SidebarMenuItem
					title="For You"
					to={config.routes.home}
					icon={<Icons.HomeIcon />}
					activeIcon={<Icons.HomeActiveIcon />}
				/>
				<SidebarMenuItem
					title="Following"
					to={config.routes.following}
					icon={<Icons.UserGroupIcon />}
					activeIcon={<Icons.UserGroupActiveIcon />}
				/>
				<SidebarMenuItem
					title="LIVE"
					to={config.routes.live}
					icon={<Icons.LiveIcon />}
					activeIcon={<Icons.LiveActiveIcon />}
				/>
			</SidebarMenu>

			<SuggestedAccounts label="Suggested accounts" data={suggetestedUsers} />

			<SuggestedAccounts label="Following accounts" />
		</aside>
	);
};

export default Sidebar;
