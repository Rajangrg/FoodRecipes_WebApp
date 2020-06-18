import React from 'react';

//Ui components
import { Card, Image, Button } from 'semantic-ui-react'

const Recipe = (props) => {
	return (
		<div>
			{
				props.recipe.map((recipe) => {
					return (
						<Card>
							<Image src={recipe.image_url} wrapped ui={false} />
							<Card.Content>
								<Card.Header>{recipe.title}</Card.Header>
								<Card.Meta>
									<span className='date'>Social Ranking: {recipe.social_rank}%</span>
								</Card.Meta>
								<Card.Description>
									This recipe was published by {recipe.publisher}
								</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<Button inverted color='green'>View Recipe </Button>
							</Card.Content>
						</Card>
					)
				})
			}
		</div>
	);
}

export default Recipe;