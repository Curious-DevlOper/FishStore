import { useRef } from "react";
import PropTypes from "prop-types";

const AddFishForm = ({ addFish }) => {
  const nameRef = useRef();
  const priceRef = useRef();
  const statusRef = useRef();
  const descRef = useRef();
  const imageRef = useRef();

  const createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      status: statusRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value,
    };

    addFish(fish);
    // refresh the form
    event.currentTarget.reset();
  };

  return (
    <form className="fish-edit" onSubmit={createFish}>
      <input name="name" ref={nameRef} type="text" placeholder="Name" />
      <input name="price" ref={priceRef} type="text" placeholder="Price" />
      <select name="status" ref={statusRef} placeholder="Status">
        <option value="available">Fresh!</option>
        <option value="unavailable">Unfresh!</option>
      </select>
      <textarea name="desc" ref={descRef} placeholder="Desc" />
      <input name="image" ref={imageRef} type="text" placeholder="Image" />
      <button type="submit">Add Fish</button>
    </form>
  );
};

// Adding propTypes validation
AddFishForm.propTypes = {
  addFish: PropTypes.func.isRequired,
};

export default AddFishForm;
