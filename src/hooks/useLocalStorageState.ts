import { useEffect, useState } from 'react';

export function useLocalStorageState<TData>(
	defaultValue: TData,
	key: string,
): [TData, React.Dispatch<React.SetStateAction<TData>>] {
	const [value, setValue] = useState(() => {
		const stickyValue = window.localStorage.getItem(key);
		return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
	});
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	return [value, setValue];
}
