import React, { useEffect, useState } from 'react';

import { StyledApp, ContentsWrapper, ProfileWrapper } from './app.styled';

import CustomInput from '../custom-unput/custom-input.comp';
import Profiles from '../profiles/profiles.comp';

function App() {
	const [loading, setLoading] = useState(false);
	const [students, setStudents] = useState([]);

	const [name, setName] = useState('');
	const [tag, setTag] = useState('');

	useEffect(() => {
		setLoading(true);
		fetch('https://www.hatchways.io/api/assessment/students')
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				const allStudents = data.students.map((student) => {
					return { ...student, tags: [] };
				});
				setStudents(allStudents);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}, []);

	const searchByName = () => {};

	const searchByTag = () => {};

	const setStudentTag = (tag, studentId) => {
		const studentIndex = students.findIndex((s) => s.id === studentId);

		const student = students.filter((s) => s.id === studentId)[0];

		student.tags = [...student.tags, tag];

		students[studentIndex] = student;

		setStudents(students);
	};

	return (
		<StyledApp>
			<div className='container'>
				<ContentsWrapper>
					<div className='inputs-container'>
						<CustomInput
							placeholder='Search by name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							onEnterPress={searchByName}
						/>
						<CustomInput
							placeholder='Search by tags'
							value={tag}
							onChange={(e) => setTag(e.target.value)}
							onEnterPress={searchByTag}
						/>
					</div>

					<ProfileWrapper>
						{students && !loading && (
							<Profiles students={students} setStudentTag={setStudentTag} />
						)}
					</ProfileWrapper>
				</ContentsWrapper>
			</div>
		</StyledApp>
	);
}

export default App;
