import React from 'react';

//components
import Header from './Componenets/Header/Header';



class App extends React.Component {

  getReceips=(e)=>{
    e.preventDefault();
    console.log("heloo");
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
