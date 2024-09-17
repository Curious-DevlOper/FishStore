import { Component } from "react";
import '../App.css';
import sampleFishes from '../sample-fishes'

import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import Fish from "./Fish";


class App extends Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = (fish) => {
    console.log("Adding a Fish", fish);
    // Additional logic to add fish to the `fishes` state
    this.setState((prevState) => ({
      fishes: {
        ...prevState.fishes, // Spread the existing fishes in state
        [`fish${Date.now()}`]: fish  // Add a new fish with a unique key- the fish is the one that got passed in
         
      }
    }));
  };
  // loading sample fishes from sampleFishes file 
  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes})
  }

  render() {
    return ( 
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => 
            <Fish key={key} details={this.state.fishes[key]}/>  )}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} 
        loadSampleFishes={this.loadSampleFishes} 

        />
      </div>
    );
  }
}

export default App;
