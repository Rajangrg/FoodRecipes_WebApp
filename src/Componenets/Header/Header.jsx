import React from 'react';

// components
import Form from '../Form/Form';

//ui library
import { Menu } from 'semantic-ui-react';


const Header = (props) => {
	return (
		<div>
	<Menu >
				<Menu.Item header>Food Recipes</Menu.Item>
				<Menu.Item
					name='Home'
				/>
				<Menu.Item position='right'>
					<Form findReceipe={props.getReceipe}></Form>
				</Menu.Item>
			</Menu>

		</div>
	);
}

export default Header;


/* 	<Menu.Item position='right'>
					<Form></Form>
				</Menu.Item>*/