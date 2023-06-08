import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';

import { PopperWrapper } from 'components/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }: any) {
	const renderItems = () => {
		return items.map((item: any, index: number) => {
			return <MenuItem key={index} data={item} />;
		});
	};

	return (
		<Tippy
			interactive
			delay={[0,700]}
			placement="bottom-end"
			render={(attrs: any) => (
				<div className={cx('menu-list')} tabIndex={-1} {...attrs}>
					<PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
				</div>
			)}>
			{children}
		</Tippy>
	);
}

export default Menu;
