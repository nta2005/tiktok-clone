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
	const [loading, setLoading] = useState(false);

	const inputRef = useRef<any>();

	useEffect(() => {
		if (!searchValue.trim()) {
			setSearchResult([]);
			return;
		}

		setLoading(true);

		fetch(
			`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
				searchValue,
			)}&type=less`,
		)
			.then((res) => res.json())
			.then((res) => {
				setSearchResult(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
			});
	}, [searchValue]);

	const handleClear = () => {
		setSearchValue('');
		setSearchResult([]);
		inputRef.current.focus();
	};

	const handleHideResult = () => {
		setShowResult(false);
	};

	const handleInputChange = (e: any) => {
		const value = e.target.value;

		if (value.startsWith(' ')) {
			if (searchValue !== '') {
				e.setSelectionRange(value.length, value.length);
			}
			setSearchValue('');
		} else {
			setSearchValue(value);
		}
	};

	return (
		<HeadlessTippy
			interactive
			visible={showResult && searchResult.length > 0}
			render={(attrs: any) => (
				<div className={cx('search-result')} tabIndex={-1} {...attrs}>
					<PopperWrapper>
						<h4 className={cx('search-title')}>Accounts</h4>
						{searchResult.map((result: any, index: number) => (
							<AccountItem key={result.id} data={result} />
						))}
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
					onChange={handleInputChange}
					onFocus={() => setShowResult(true)}
				/>

				{!!searchValue && !loading && (
					<button className={cx('clear')} onClick={handleClear}>
						{<FontAwesomeIcon icon={faCircleXmark} />}
					</button>
				)}

				{loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

				<button className={cx('search-btn')}>{<Icons.SearchIcon />}</button>
			</div>
		</HeadlessTippy>
	);
}
