import React, { useEffect, useState } from 'react';

import { StyledApp } from './app.styled';

function App() {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch('https://www.hatchways.io/api/assessment/students')
			.then((res) => res.json())
			.then((data) => {
				console.log(data.students);
				setLoading(false);
				setData(data.students);
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
			});
	}, []);

	return (
		<StyledApp>
			<div className='container'>
				<h1>Home</h1>
			</div>
		</StyledApp>
	);
}

export default App;
