import {
	faEarthAsia,
	faCircleQuestion,
	faKeyboard,
	faUser,
	faCoins,
	faGear,
	faSignOut,
} from '@fortawesome/free-solid-svg-icons';

const avatarUrl =
	'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1686290400&x-signature=%2F5iJhGp6k5JckhV%2F2jlFioLaNbY%3D';

const MENU_ITEMS = [
	{
		id: 3,
		icon: faEarthAsia,
		title: 'English',
		children: {
			title: 'Language',
			data: [
				{
					id: 0,
					type: 'language',
					code: 'en',
					title: 'English',
				},
				{
					id: 1,
					type: 'language',
					code: 'vi',
					title: 'Tiếng Việt',
				},
			],
		},
	},
	{
		id: 4,
		icon: faCircleQuestion,
		title: 'Feedback and help',
		to: '/feedback',
	},
	{
		id: 5,
		icon: faKeyboard,
		title: 'Keyboard shortcuts',
	},
];

const USER_MENU = [
	{
		id: 0,
		icon: faUser,
		title: 'View profile',
		to: '/profile',
	},
	{
		id: 1,
		icon: faCoins,
		title: 'Get coins',
		to: '/coin',
	},
	{
		id: 2,
		icon: faGear,
		title: 'Settings',
		to: '/settings',
	},

	...MENU_ITEMS,
	{
		id: 6,
		icon: faSignOut,
		title: 'Log out',
		to: '/logout',
		separate: true,
	},
];

export { avatarUrl, MENU_ITEMS, USER_MENU };
