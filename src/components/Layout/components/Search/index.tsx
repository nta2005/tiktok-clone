/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import { PopperWrapper } from 'components/Popper';
import { AccountItem, Icons } from 'components';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

export default function Search() {
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState<any>([]);
	const [showResult, setShowResult] = useState(true);

	const inputRef = useRef<any>();

	useEffect(() => {
		setTimeout(() => {
			setSearchResult([1, 2, 3, 4]);
		}, 1000);
	}, []);

	const handleClear = () => {
		setSearchValue('');
		setSearchResult([]);
		inputRef.current.focus();
	};

	const handleHideResult = () => {
		setShowResult(false);
	};

	return (
		<HeadlessTippy
			interactive
			visible={showResult && searchResult.length > 0}
			render={(attrs: any) => (
				<div className={cx('search-result')} tabIndex={-1} {...attrs}>
					<PopperWrapper>
						<h4 className={cx('search-title')}>Accounts</h4>
						<AccountItem />
						<AccountItem />
						<AccountItem />
					</PopperWrapper>
				</div>
			)}
			onClickOutside={handleHideResult}>
			<div className={cx('search')}>
				<input
					ref={inputRef}
					value={searchValue}
					aria-label="search"
					placeholder="Search accounts and videos"
					spellCheck={false}
					onChange={(e) => setSearchValue(e.target.value)}
					onFocus={() => setShowResult(true)}
				/>

				{!!searchValue && (
					<button className={cx('clear')} onClick={handleClear}>
						{<FontAwesomeIcon icon={faCircleXmark} />}
					</button>
				)}

				{/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

				<button className={cx('search-btn')}>{<Icons.SearchIcon />}</button>
			</div>
		</HeadlessTippy>
	);
}
