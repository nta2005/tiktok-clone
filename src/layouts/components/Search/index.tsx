import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import SearchApi from 'api/searchApi';
import { PopperWrapper } from 'components/Popper';
import { AccountItem, Icons } from 'components';
import { useDebounce } from 'hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const Search: React.FC = () => {
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState<any>([]);
	const [showResult, setShowResult] = useState(true);
	const [loading, setLoading] = useState(false);

	const debounced = useDebounce(searchValue, 500);

	const inputRef = useRef<any>();

	useEffect(() => {
		if (!debounced.trim()) {
			setSearchResult([]);
			return;
		}

		(async () => {
			try {
				setLoading(true);
				const res = await SearchApi.searchAccounts(debounced);
				setSearchResult(res.data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
			}
		})();
	}, [debounced]);

	const handleClear = () => {
		setSearchValue('');
		setSearchResult([]);
		inputRef.current.focus();
	};

	const handleHideResult = () => {
		setShowResult(false);
	};

	const handleChange = (e: any) => {
		const searchValue = e.target.value;

		if (!searchValue.startsWith(' ')) {
			setSearchValue(searchValue);
		}
	};

	return (
		// Using a wrapper <div> tag around the reference element
		// solves this by creating a new parentNode context.
		<div>
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
						onChange={handleChange}
						onFocus={() => setShowResult(true)}
					/>

					{!!searchValue && !loading && (
						<button className={cx('clear')} onClick={handleClear}>
							{<FontAwesomeIcon icon={faCircleXmark} />}
						</button>
					)}

					{loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

					<button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
						{<Icons.SearchIcon />}
					</button>
				</div>
			</HeadlessTippy>
		</div>
	);
};

export default Search;
