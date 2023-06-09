import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleXmark,
	faSpinner,
	faEllipsisVertical,
	faEarthAsia,
	faCircleQuestion,
	faKeyboard,
	faUser,
	faCoins,
	faGear,
	faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { PopperWrapper, PopperMenu } from 'components/Popper';
import styles from './Header.module.scss';
import images from 'assets/images';
import { AccountItem, Button, Icons, Image } from 'components';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
	{
		icon: <FontAwesomeIcon icon={faEarthAsia} />,
		title: 'English',
		children: {
			title: 'Language',
			data: [
				{
					type: 'language',
					code: 'en',
					title: 'English',
				},
				{
					type: 'language',
					code: 'vi',
					title: 'Tiếng Việt',
				},
			],
		},
	},
	{
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
		title: 'Feedback and help',
		to: '/feedback',
	},
	{ icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

function Header() {
	const [searchResult, setSearchResult] = useState<any>([]);

	const currentUser = true;

	useEffect(() => {
		setTimeout(() => {
			setSearchResult([]);
		}, 1000);
	}, []);

	//Handle logic
	const handleMenuChange = (menuItem: any) => {
		switch (menuItem.type) {
			case 'language':
				//Handle language
				break;
			default:
				break;
		}
	};

	const userMenu = [
		{
			icon: <FontAwesomeIcon icon={faUser} />,
			title: 'View profile',
			to: '/profile',
		},
		{
			icon: <FontAwesomeIcon icon={faCoins} />,
			title: 'Get coins',
			to: '/coin',
		},
		{
			icon: <FontAwesomeIcon icon={faGear} />,
			title: 'Settings',
			to: '/settings',
		},

		...MENU_ITEMS,
		{
			icon: <FontAwesomeIcon icon={faSignOut} />,
			title: 'Log out',
			to: '/logout',
			separate: true,
		},
	];

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<img src={images.logo} alt="logo" />

				<HeadlessTippy
					interactive
					visible={searchResult.length > 0}
					render={(attrs: any) => (
						<div className={cx('search-result')} tabIndex={-1} {...attrs}>
							<PopperWrapper>
								<h4 className={cx('search-title')}>Accounts</h4>
								<AccountItem />
								<AccountItem />
								<AccountItem />
							</PopperWrapper>
						</div>
					)}>
					<div className={cx('search')}>
						<input
							aria-label="search"
							placeholder="Search accounts and videos"
							spellCheck={false}
						/>

						<button className={cx('clear')}>
							{<FontAwesomeIcon icon={faCircleXmark} />}
						</button>

						<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

						<button className={cx('search-btn')}>{<Icons.SearchIcon />}</button>
					</div>
				</HeadlessTippy>

				<div className={cx('actions')}>
					{currentUser ? (
						<>
							<Tippy delay={[0, 50]} content="Upload video" placement="bottom">
								<button className={cx('action-btn')}>{<Icons.UploadIcon />}</button>
							</Tippy>

							<Tippy delay={[0, 50]} content="Message" placement="bottom">
								<button className={cx('action-btn')}>{<Icons.MessageIcon />}</button>
							</Tippy>

							<Tippy delay={[0, 50]} content="Inbox" placement="bottom">
								<button className={cx('action-btn')}>
									<Icons.InboxIcon />
									<span className={cx('badge')}>12</span>
								</button>
							</Tippy>
						</>
					) : (
						<>
							<Button text>Upload</Button>
							<Button primary>Log In</Button>
						</>
					)}

					<PopperMenu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
						{currentUser ? (
							<Image
								className={cx('user-avatar')}
								src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_100x100.jpeg?x-expires=1686290400&x-signature=%2F5iJhGp6k5JckhV%2F2jlFioLaNbY%3D"
								alt="Nguyen Thanh An"
								fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
							/>
						) : (
							<button className={cx('more-btn')}>
								{<FontAwesomeIcon icon={faEllipsisVertical} />}
							</button>
						)}
					</PopperMenu>
				</div>
			</div>
		</header>
	);
}

export default Header;
