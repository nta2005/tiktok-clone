/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';

const useDebounce = (value: any, delay: number) => {
	const [debounceValue, setDebounceValue] = useState<any>(value);

	useEffect(() => {
		const handler = setTimeout(() => setDebounceValue(value), delay);

		return () => clearTimeout(handler);
	}, [value]);

	return debounceValue;
};

export default useDebounce;
