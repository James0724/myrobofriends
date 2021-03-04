import React from 'react';

const Searchbox = ({ handleChange }) => {
	return (
		<div className="pa2">
			<input
				className="pa3 b--green bg-yellow"
				type="search"
				placeholder="search robots"
				onChange={handleChange}
			/>
		</div>
	);
};

export default Searchbox;
