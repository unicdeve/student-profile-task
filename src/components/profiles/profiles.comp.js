import React, { useEffect, useState } from 'react';

import ProfileCard from '../profile-card/profile-card.comp';

export default function Profiles({
	students,
	searchedStudents,
	setStudentTag,
	tag,
	name,
}) {
	const [myStudents, setMyStudents] = useState(students);

	useEffect(() => {
		if (tag !== '' || name !== '') {
			setMyStudents(searchedStudents);
		} else setMyStudents(students);
	}, [tag, name, searchedStudents, students]);

	return (
		<div>
			{myStudents.map((student) => (
				<ProfileCard
					key={student.id}
					student={student}
					setStudentTag={setStudentTag}
				/>
			))}
		</div>
	);
}
