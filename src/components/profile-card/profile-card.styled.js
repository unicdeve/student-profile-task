import styled from 'styled-components';

export const StyledProfile = styled.div`
	border-bottom: 1px solid #ccc;

	.profile-container {
		display: flex;
		align-items: center;
		padding: 10px;

		.img-wrapper img {
			width: 7rem;
			height: 7rem;
			border-radius: 50%;
			border: 1px solid #ccc;
			object-fit: cover;
		}
	}
`;

export const ProfileDetailsWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	.details {
		margin-left: 2rem;

		h3 {
			font-size: 200%;
			font-weight: 900;
			line-height: 1;
			text-transform: uppercase;
		}

		.item {
			color: #c2c2c2;
			font-size: 14px;
			font-weight: 500;
		}
	}
`;
