import React from 'react';
import classNames from 'classnames';
import images from 'assets/images';
import styles from './Image.module.scss';

const Image = (
	{ src, alt, className, fallback: customFallback = images.noImage, ...props }: any,
	ref: any,
) => {
	const [fallback, setFallback] = React.useState('');

	const handleError = () => {
		setFallback(customFallback);
	};

	return (
		<img
			className={classNames(styles.wrapper, className)}
			ref={ref}
			src={fallback || src}
			alt={alt}
			{...props}
			onError={handleError}
		/>
	);
};

export default React.forwardRef(Image);
