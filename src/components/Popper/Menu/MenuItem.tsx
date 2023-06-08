/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Button } from 'components';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }: any) {
	const classes = cx('menu-item', {
		separate: data.separate,
	});

	return (
		<Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
			{data.title}
		</Button>
	);
}

export default MenuItem;
