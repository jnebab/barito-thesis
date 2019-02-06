import React, { Fragment } from 'react';

const Row = props => {
	const { children, label } = props;

	return (
		<Fragment>
			<label>{label}</label><br />
			{children}<br />
		</Fragment>
	)
}

export default Row;