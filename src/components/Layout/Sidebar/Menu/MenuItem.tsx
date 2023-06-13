import React from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

interface Props {
	title: string;
	to: string;
	icon: any;
	activeIcon: any;
}

const MenuItem: React.FC<Props> = ({ title, to, icon, activeIcon }) => {
	return (
		<NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
			
			<span className={cx('icon')}>{icon}</span>
			<span className={cx('active-icon')}>{activeIcon}</span>
			<span className={cx('title')}>{title}</span>
		</NavLink>
	);
};

export default MenuItem;
