import React from 'react';

//components
import Header from './Componenets/Header/Header';



class App extends React.Component {

  getReceips= async (e)=>{
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
     await fetch(
      `https://cors-anywhere.herokuapp.com/https://recipesapi.herokuapp.com/api/search?q=${recipeName}&page=3`)
      .then(response =>  response.json())
      .then ((data) =>{
         console.log(data)
      })
      .catch((error)=>{
          console.log(error);
      })

  }
  render() {
    return (
      <div>
        <Header getReceipe = {this.getReceips}></Header>
        <br></br>
      </div>
    );
  }
}
export default App;
