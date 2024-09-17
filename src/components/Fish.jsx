import  { Component } from "react";
import PropTypes from "prop-types";

class Fish extends Component {
  render() {
    const { image, name, price, desc, status} = this.props.details;
    const isAvailable = status === "available" // Destructure props for cleaner code

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">{name} 
            <span className="price">{price}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable}>{isAvailable ? "Add to Order": "Sold out" }</button>
      </li>
    );
  }
}


// Adding PropTypes validation
Fish.propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      desc: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    }).isRequired
  };
export default Fish;
