import React, { useState } from 'react';

import plus_icon from '../../assets/icons/plus.svg';
import minus_icon from '../../assets/icons/minus.svg';

import {
	StyledProfile,
	ProfileDetailsWrapper,
	GradesWrapper,
	Icon,
	TagItem,
} from './profile-card.styled';
import CustomInput from '../custom-unput/custom-input.comp';

export default function ProfileCard({ student, setStudentTag }) {
	const {
		id,
		pic,
		firstName,
		lastName,
		email,
		company,
		skill,
		grades,
		tags,
	} = student;

	const average =
		grades.reduce((a, b) => parseFloat(a) + parseFloat(b)) / grades.length;

	const [open, setOpen] = useState(false);
	const [tag, setTag] = useState('');

	const onEnterPress = (e) => {
		if (e.key === 'Enter') {
			setStudentTag(tag, id);
			setTag('');
		}
	};

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
										<div key={i} className='item'>
											Test {i + 1}: <span>{grade}</span>
										</div>
									))}

								<div className='tags-wrapper'>
									{tags &&
										tags.map((tag, i) => <TagItem key={i}>{tag}</TagItem>)}
								</div>

								<CustomInput
									placeholder='Add a tag'
									sm
									value={tag}
									onChange={(e) => setTag(e.target.value)}
									onEnterPress={onEnterPress}
								/>
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
