import React from 'react';
import './MainLayout.scss';

const MainLayout = ({children}) => {
	return (
		<div className="MainLayout">
			{children}
		</div>
	)
}

export default MainLayout;
