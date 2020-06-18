import React from 'react'

//Ui library
import { Button} from 'semantic-ui-react';
import { Input } from 'semantic-ui-react'

const Form =(props)=>{
	return(
		<div>
			<form onSubmit={props.findReceipe}>
				<Input focus  icon='search' iconPosition='left' type="text" placeholder="search here..." name="recipeName"></Input>
				<Button inverted color='orange'>Search</Button>
			</form>
		</div>
	);

}

export default Form;