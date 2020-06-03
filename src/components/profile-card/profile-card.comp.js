import React, { useState } from 'react';

import plus_icon from '../../assets/icons/plus.svg';
import minus_icon from '../../assets/icons/minus.svg';

import {
	StyledProfile,
	ProfileDetailsWrapper,
	GradesWrapper,
	Icon,
} from './profile-card.styled';

export default function ProfileCard({ student }) {
	const { pic, firstName, lastName, email, company, skill, grades } = student;

	const average =
		grades.reduce((a, b) => parseFloat(a) + parseFloat(b)) / grades.length;

	const [open, setOpen] = useState(false);

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

						{open && (
							<GradesWrapper>
								{grades &&
									grades.map((grade, i) => (
										<div className='item'>
											Test {i + 1}: <span>{grade}</span>
										</div>
									))}
							</GradesWrapper>
						)}
					</div>

					<div className='icon-wrapper'>
						<Icon
							icon={open ? minus_icon : plus_icon}
							onClick={() => setOpen(!open)}
						/>
					</div>
				</ProfileDetailsWrapper>
			</div>
		</StyledProfile>
	);
}
