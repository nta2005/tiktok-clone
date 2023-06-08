import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleXmark,
	faSpinner,
	faMagnifyingGlass,
	faEllipsisVertical,
	faEarthAsia,
	faCircleQuestion,
	faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { PopperWrapper, PopperMenu } from 'components/Popper';
import styles from './Header.module.scss';
import images from 'assets/images';
import { AccountItem, Button } from 'components';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
	{ icon: <FontAwesomeIcon icon={faEarthAsia} />, title: 'English' },
	{
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
		title: 'Feedback and help',
		to: '/feedback',
	},
	{ icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

function Header() {
	const [searchResult, setSearchResult] = useState<any>([]);

	useEffect(() => {
		setTimeout(() => {
			setSearchResult([]);
		}, 1000);
	}, []);

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<img src={images.logo} alt="logo" />

				<Tippy
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

						<button className={cx('search-btn')}>
							{<FontAwesomeIcon icon={faMagnifyingGlass} />}
						</button>
					</div>
				</Tippy>

				<div className={cx('actions')}>
					<Button text>Upload</Button>
					<Button primary>Log In</Button>

					<PopperMenu items={MENU_ITEMS}>
						<button className={cx('more-btn')}>
							{<FontAwesomeIcon icon={faEllipsisVertical} />}
						</button>
					</PopperMenu>
				</div>
			</div>
		</header>
	);
}

export default Header;
