import React from 'react';
import classNames from 'classnames';
import images from 'assets/images';
import styles from './Image.module.scss';

interface Props {
	src: string;
	alt?: string;
	className?: string;
	fallback?: string;
	[x: string]: any;
}

const Image: React.FC<Props> = React.forwardRef((props: Props, ref: any) => {
	const {
		src,
		alt = src,
		className,
		fallback: customFallback = images.noImage,
		...passProps
	} = props;

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
			{...passProps}
			onError={handleError}
		/>
	);
});

export default Image;
