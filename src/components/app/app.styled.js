import styled from 'styled-components';

export const StyledApp = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	.container {
		height: 90%;
		width: 75%;
		background-color: #fff;
		border-radius: 20px;
		overflow: auto;

		&::-webkit-scrollbar {
			width: 4px;
		}

		&::-webkit-scrollbar-track {
			border-radius: 10px;
		}

		&::-webkit-scrollbar-thumb {
			border-radius: 10px;
			background-color: #c5c5c5;
		}
	}
`;

export const ContentsWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const InputsContainer = styled.div`
	display: flex;
	flex-direction: column;

	.input-wrapper {
		padding: 10px;
		display: flex;
		justify-content: center;

		input {
			width: 100%;
			font-size: 20px;
			padding: 10px;
			border: none;
			border-bottom: 1px solid #ccc;

			&:focus {
				outline: none;
			}
		}
	}
`;

export const ProfileWrapper = styled.div``;
