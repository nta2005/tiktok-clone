import React from 'react';

interface Props {
	children: any;
}

const Menu: React.FC<Props> = ({ children }) => {
	return <nav>{children}</nav>;
};

export default Menu;
