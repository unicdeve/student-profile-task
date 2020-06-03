import React, { useEffect, useState } from 'react';

import ProfileCard from '../profile-card/profile-card.comp';

export default function Profiles({
	students,
	searchedStudents,
	setStudentTag,
	tag,
}) {
	const [myStudents, setMyStudents] = useState(students);

	useEffect(() => {
		if (tag !== '') {
			setMyStudents(searchedStudents);
		} else setMyStudents(students);
	}, [tag, searchedStudents, students]);

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
