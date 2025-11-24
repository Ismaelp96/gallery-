import React from 'react';

import SearchIcon from '../assets/icons/search.svg?react';

import InputText from './input-text';
import { debounce } from '../helpers/utils';

export default function PhotoSearch() {
	const [inputValue, setInputValue] = React.useState('');
	/* eslint-disable react-hooks/exhaustive-deps */
	const debouncedSetValue = React.useCallback(
		debounce((value: string) => console.log('Valor com debounce', value), 1000),
		[],
	);

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setInputValue(value);
		debouncedSetValue(value);
	}
	return (
		<InputText
			icon={SearchIcon}
			placeholder='Buscar fotos'
			className='flex-1'
			value={inputValue}
			onChange={handleInputChange}
		/>
	);
}
