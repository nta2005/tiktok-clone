import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from 'config';
import { images } from 'assets';
import { Button, Icons, Image } from 'components';
import { PopperMenu } from 'components/Popper';
import { MENU_ITEMS, USER_MENU } from 'utils/contants';

import Search from '../Search/Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header: React.FC = () => {
	const currentUser = true;

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

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<Link to={config.routes.home} className={cx('logo-link')}>
					<img src={images.logo} alt="logo" />
				</Link>

				<Search />

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

					<PopperMenu data={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
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
};

export default Header;
