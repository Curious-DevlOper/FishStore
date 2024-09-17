import  { Component } from "react";
import AddFishForm from "./AddFishForm";
import PropTypes from "prop-types";

class Inventory extends Component {
  render() {
    const { addFish, loadSampleFishes} = this.props; // Destructure props for cleaner code

    return (
      <div className="inventory">
        <AddFishForm addFish={addFish} />
        <button onClick={loadSampleFishes}> Load sample fishes</button>
      </div>
    );
  }
}

// Adding propTypes validation
Inventory.propTypes = {
  addFish: PropTypes.func.isRequired,
  loadSampleFishes: PropTypes.func.isRequired,
};
export default Inventory;
