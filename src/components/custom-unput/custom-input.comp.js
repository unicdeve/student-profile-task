import React from 'react';

import { StyledInput } from './custom-input.styled';

export default function CustomInput({
	placeholder,
	value,
	onChange,
	onEnterPress,
	sm,
}) {
	return (
		<StyledInput className='input-wrapper' sm={sm}>
			<input
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onKeyPress={onEnterPress}
			/>
		</StyledInput>
	);
}
