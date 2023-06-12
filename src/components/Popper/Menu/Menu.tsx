import React, { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { PopperWrapper } from 'components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
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

	return (
		<Tippy
			interactive
			delay={[0, 700]}
			offset={[12, 8]}
			hideOnClick={hideOnClick}
			placement="bottom-end"
			render={(attrs: any) => (
				<div className={cx('menu-list')} tabIndex={-1} {...attrs}>
					<PopperWrapper className={cx('menu-popper')}>
						{history.length > 1 && (
							<Header
								title={current.title}
								onBack={() => {
									setHistory((prev) => prev.slice(0, prev.length - 1));
								}}
							/>
						)}
						<div className={cx('menu-body')}>{renderItems()}</div>
					</PopperWrapper>
				</div>
			)}
			onHide={() => {
				setHistory((prev) => prev.slice(0, 1));
			}}>
			{children}
		</Tippy>
	);
};

export default PopperMenu;