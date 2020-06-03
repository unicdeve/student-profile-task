import React from 'react';
import { StyledProfile, ProfileDetailsWrapper } from './profile-card.styled';

export default function ProfileCard({ student }) {
	console.log(student);

	const { pic, firstName, lastName, email, company, skill, grades } = student;

	const average =
		grades.reduce((a, b) => parseFloat(a) + parseFloat(b)) / grades.length;

	return (
		<StyledProfile>
			<div className='profile-container'>
				<div className='img-wrapper'>
					<img src={pic} alt='student pic' />
				</div>

				<ProfileDetailsWrapper>
					<div className='details'>
						<h3>{`${firstName} ${lastName}`}</h3>

						<div className='item'>
							Email: <span>{email}</span>
						</div>

						<div className='item'>
							Company: <span>{company}</span>
						</div>

						<div className='item'>
							Skill: <span>{skill}</span>
						</div>

						<div className='item'>
							Average: <span>{average}</span>
						</div>
					</div>
				</ProfileDetailsWrapper>
			</div>
		</StyledProfile>
	);
}
