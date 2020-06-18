import React from 'react';

//components
import Header from './Componenets/Header/Header';
import Recipe from './Componenets/RecipeCard/Recipe';

//Ui components

class App extends React.Component {

  state = {
    recipes: []
  }

  getReceips = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    await fetch(
      `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${recipeName}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          recipes: data.recipes
        });
      })
      .catch((error) => {
        //console.log(error); //debug
      })
  }

  componentDidMount=()=>{
    const json = localStorage.getItem("recipes");
    const recipe = JSON.parse(json);
    this.setState({
      recipes :recipe
    })
    //console.log(this.state.recipes); debug
  }

  componentDidUpdate=() =>{
    //localstorage store into string format
    const recipestorage = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipestorage);
  }

  render() {
    return (
      <div>
        <Header getReceipe={this.getReceips}></Header>
        <br></br>
          <Recipe recipe={this.state.recipes}></Recipe>
      </div>
    );
  }
}
export default App;
