import React from 'react';

// React Router dom
import {Link} from 'react-router-dom'
//Ui components
import { Grid, Image, Button } from 'semantic-ui-react'

//custome Css
import  './RecipeDetailStyle.css'

class RecipeDetail extends React.Component {
	state = {
		activeRecipe: []
	};

	componentDidMount = async () => {
		const recipeTitle = this.props.location.state.recipe;
		await fetch(
			`https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${recipeTitle}`)
			.then(response => response.json())
			.then((data) => {
				//console.log(data);
				this.setState({
					activeRecipe: data.recipes[0]
				});
			})
			.catch((error) => {
				console.log(error); //debug
			})
	}
	render() {
		console.log(this.state.activeRecipe);
		const recipeDetail = this.state.activeRecipe
		return (
			<div className="recipeDetail">
				{this.state.activeRecipe.length !== 0 &&
					<div>
						<Grid centered columns={2}>
							<Grid.Column>
								<Image src={recipeDetail.image_url} alt={recipeDetail.title} size='medium' />
							</Grid.Column>

						</Grid>
						<Grid centered columns={2}>
							<Grid.Column>
								<h1> {recipeDetail.title}</h1>
								<h3> Publisher Name: {recipeDetail.publisher}</h3>
								<h3>Publisher Url : <a href={recipeDetail.publisher_url}>{recipeDetail.publisher_url}</a></h3>
								<Button inverted color='green'>
									<Link to={{pathname:`/`}}>
										Go Home
									</Link>
											</Button>
							</Grid.Column>
						</Grid>
					</div>
				}

			</div>
		);
	}
}

export default RecipeDetail;