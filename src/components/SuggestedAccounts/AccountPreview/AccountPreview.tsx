import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Image, Button } from 'components';
import styles from './AccountPreview.module.scss';
import { Account } from 'models/Api';

const cx = classNames.bind(styles);

interface Props {
	data: Account;
}

const AccountPreview: React.FC<Props> = ({ data }) => {
	return (
		<div className={cx('wrapper')}>
			<header className={cx('header')}>
				<Image className={cx('avatar')} src={data.avatar} alt="" />
				<Button className={cx('follow-btn')} primary>
					Follow
				</Button>
			</header>

			<div className={cx('body')}>
				<p className={cx('nickname')}>
					<strong>{data.nickname}</strong>
					{data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
				</p>
				<p className={cx('name')}>{data.full_name}</p>
				<p className={cx('analytics')}>
					<strong className={cx('value')}>{data.followers_count}</strong>
					<span className={cx('label')}>Followers</span>
					<strong className={cx('value')}>{data.likes_count}</strong>
					<span className={cx('label')}>Likes</span>
				</p>
			</div>
		</div>
	);
};

export default AccountPreview;
