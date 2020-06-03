import React, { useEffect, useState } from 'react';

import ProfileCard from '../profile-card/profile-card.comp';

import { StyledApp, ContentsWrapper, ProfileWrapper } from './app.styled';
import CustomInput from '../custom-unput/custom-input.comp';

function App() {
	const [loading, setLoading] = useState(false);
	const [students, setStudents] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch('https://www.hatchways.io/api/assessment/students')
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setStudents(data.students);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}, []);

	return (
		<StyledApp>
			<div className='container'>
				<ContentsWrapper>
					<div className='inputs-container'>
						<CustomInput placeholder='Search by name' />
						<CustomInput placeholder='Search by tags' />
					</div>

					<ProfileWrapper>
						{students &&
							!loading &&
							students.map((student) => (
								<ProfileCard key={student.id} student={student} />
							))}
					</ProfileWrapper>
				</ContentsWrapper>
			</div>
		</StyledApp>
	);
}

export default App;
