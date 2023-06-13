import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { PopperWrapper } from 'components/Popper';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

import { Menu } from 'models';

const cx = classNames.bind(styles);

const defaultFn = () => {};

interface Props {
	children: any;
	data: Menu[];
	hideOnClick?: boolean;
	onChange?: any;
}

const PopperMenu: React.FC<Props> = (props: Props) => {
	const { children, data = [], hideOnClick = false, onChange = defaultFn } = props;

	const [history, setHistory] = useState([{ data: data }]);

	const current: any = history[history.length - 1];

	const handleBack = () => {
		setHistory((prev) => prev.slice(0, prev.length - 1));
	};

	const renderItems = () => {
		return current.data.map((item: any, index: number) => {
			const isParent = !!item.children;
			return (
				<MenuItem
					key={index}
					data={item}
					onClick={() => {
						if (isParent) {
							setHistory((prev) => [...prev, item.children]);
						} else {
							onChange(item);
						}
					}}
				/>
			);
		});
	};

	const renderResult = (attrs: any) => (
		<div className={cx('menu-list')} tabIndex={-1} {...attrs}>
			<PopperWrapper className={cx('menu-popper')}>
				{history.length > 1 && <MenuHeader title={current.title} onBack={handleBack} />}
				<div className={cx('menu-body')}>{renderItems()}</div>
			</PopperWrapper>
		</div>
	);

	// Reset to first page
	const handleReset = () => {
		setHistory((prev) => prev.slice(0, 1));
	};

	return (
		<Tippy
			interactive
			delay={[0, 700]}
			offset={[12, 8]}
			hideOnClick={hideOnClick}
			placement="bottom-end"
			render={renderResult}
			onHide={handleReset}>
			{children}
		</Tippy>
	);
};

export default PopperMenu;
