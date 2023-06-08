/* eslint-disable @typescript-eslint/no-unused-vars */
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Button } from 'components';

const cx = classNames.bind(styles);

function MenuItem({ key, data }: any) {
	return (
		<Button className={cx('menu-item')} key={key} leftIcon={data.icon} to={data.to}>
			{data.title}
		</Button>
	);
}

export default MenuItem;
