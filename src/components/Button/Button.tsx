import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

interface Props {
	to?: string;
	href?: string;
	text?: boolean;
	primary?: boolean;
	outline?: boolean;
	rounded?: boolean;
	small?: boolean;
	large?: boolean;
	disabled?: boolean;
	leftIcon?: IconDefinition;
	rightIcon?: IconDefinition;
	children: any;
	className?: string | any;
	onClick?: () => void;
	[x: string]: any;
}

const Button: React.FC<Props> = (props: Props) => {
	const {
		to,
		href,
		text = false,
		primary = false,
		outline = false,
		rounded = false,
		small = false,
		large = false,
		disabled = false,
		leftIcon,
		rightIcon,
		children,
		className,
		onClick,
		...passProps
	} = props;

	let Comp: any = 'button';

	const dataProps: any = {
		onClick,
		...passProps,
	};

	//Remove event listener when button is disabled
	if (disabled) {
		Object.keys(dataProps).forEach((key) => {
			if (key.startsWith('on') && typeof dataProps[key] === 'function') {
				delete dataProps[key];
			}
		});
	}

	if (to) {
		dataProps.to = to;
		Comp = Link;
	} else if (href) {
		dataProps.href = href;
		Comp = 'a';
	}

	const classes = cx('wrapper', {
		[className]: className,
		text,
		primary,
		outline,
		rounded,
		small,
		large,
		disabled,
	});

	return (
		<Comp className={classes} {...dataProps}>
			{leftIcon && <span className={cx('icon')}>{<FontAwesomeIcon icon={leftIcon} />}</span>}
			<span className={cx('title')}>{children}</span>
			{rightIcon && <span className={cx('icon')}>{<FontAwesomeIcon icon={rightIcon} />}</span>}
		</Comp>
	);
};

export default Button;
