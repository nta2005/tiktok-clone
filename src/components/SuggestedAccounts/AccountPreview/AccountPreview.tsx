import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { avatarUrl } from 'utils';
import { Image, Button } from 'components';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

export default function AccountPreview() {
	return (
		<div className={cx('wrapper')}>
			<header className={cx('header')}>
				<Image className={cx('avatar')} src={avatarUrl} alt="" />
				<Button className={cx('follow-btn')} primary >Follow</Button>
			</header>

			<div className={cx('body')}>
				<p className={cx('nickname')}>
					<strong>thanhan0520</strong>
					<FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
				</p>
				<p className={cx('name')}>Nguyen Thanh An</p>
				<p className={cx('analytics')}>
					<strong className={cx('value')}>8.2M</strong>
					<span className={cx('label')}>Followers</span>
					<strong className={cx('value')}>8.2M</strong>
					<span className={cx('label')}>Likes</span>
				</p>
			</div>
		</div>
	);
}
