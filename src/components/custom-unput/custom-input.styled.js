import styled from 'styled-components';

export const StyledInput = styled.div`
	padding: 10px;
	display: flex;
	justify-content: ${({ sm }) => (sm ? 'flex-start' : 'center')};

	input {
		width: ${({ sm }) => (sm ? '70%' : '100%')};
		font-size: ${({ sm }) => (sm ? '16px' : '20px')};
		padding: 10px;
		border: none;
		border-bottom: 1px solid #ccc;

		&:focus {
			outline: none;
			border-bottom: 2px solid #000;
		}
	}
`;
