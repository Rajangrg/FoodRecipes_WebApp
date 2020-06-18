import React from 'react';

//React-router-dom
import {Link} from "react-router-dom";

//Ui components
import { Card,  Button, Grid } from 'semantic-ui-react'

const Recipe = (props) => {
	return (
		<div>
<Grid container columns={3}>
					{
						props.recipe.map((recipe) => {
							return (
								<Grid.Column>
									<Card>
										<img src={recipe.image_url} alt={recipe.title} height={250} />
										<Card.Content>
											<Card.Header>{recipe.title.length < 20 ? `${recipe.title}`: `${recipe.title.substring(0,23)}...`}</Card.Header>
											<Card.Meta>
												<span className='date'>Social Ranking: {recipe.social_rank}%</span>
											</Card.Meta>
											<Card.Description>
												This recipe was published by {recipe.publisher}
											</Card.Description>
										</Card.Content>
										<Card.Content extra>
											<Button inverted color='green'>
												<Link key={recipe.recipe_id} to={{
													pathname:`/recipeDetail/${recipe.recipe_id}`,
													state: {recipe : recipe.title}
												}}>View Recipe </Link>
											</Button>
										</Card.Content>
									</Card>
								</Grid.Column>
							)
						})
					}
			</Grid>
		</div>
	);
}

export default Recipe;