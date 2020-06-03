import styled from 'styled-components';

export const StyledProfile = styled.div`
	border-bottom: 1px solid #ccc;

	.profile-container {
		display: flex;
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
	width: 100%;

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

export const Icon = styled.div`
	width: 40px;
	height: 40px;
	cursor: pointer;
	background: url(${({ icon }) => icon});
	background-repeat: no-repeat;
	background-size: 100% 100%;
	transition: all 0.4s;
`;

export const GradesWrapper = styled.div`
	margin-top: 1.5rem;
`;
