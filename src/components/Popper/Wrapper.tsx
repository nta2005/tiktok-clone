import React from 'react';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

interface Props {
	children: any;
	className?: string;
}

const Wrapper: React.FC<Props> = (props: Props) => {
	const { children, className } = props || {};

	return <div className={cx('wrapper', className)}>{children}</div>;
};

export default Wrapper;
