import { useState } from "react";
import { toast } from "react-toastify";

function Form({ addItem }) {
  const [newItem, setNewItem] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(newItem);
    if (!newItem) {
      toast.error("Please provide value");
      return;
    }
    addItem(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={submitForm}>
      <h4>Grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
}
export default Form;
