import React from 'react';

import ProfileCard from '../profile-card/profile-card.comp';

export default function Profiles({ students, setStudentTag }) {
	return (
		<div>
			{students.map((student) => (
				<ProfileCard
					key={student.id}
					student={student}
					setStudentTag={setStudentTag}
				/>
			))}
		</div>
	);
}
