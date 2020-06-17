import React from 'react'

//Ui library
import { Button} from 'semantic-ui-react';
import { Input } from 'semantic-ui-react'

const Form =()=>{
	return(
		<div>
			<form>
				<Input focus  icon='search' iconPosition='left' type="text" placeholder="..." name="search"></Input>
				<Button inverted color='blue'>Search</Button>
			</form>
		</div>
	);

}

export default Form;