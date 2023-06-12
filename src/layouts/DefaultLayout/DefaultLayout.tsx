import React from 'react';
import { Header, Sidebar } from 'components/Layout';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

interface Props {
	children: any;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className={cx('wrapper')}>
			<Header />
			<div className={cx('container')}>
				<Sidebar />
				<div className={cx('content')}>{children}</div>
			</div>
		</div>
	);
};

export default DefaultLayout;
