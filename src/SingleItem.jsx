import { useState } from "react";

function SingleItem({ item, removeItem, editItem }) {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{ textDecoration: item.completed && "line-through" }}
        className="name"
      >
        {item.name}
      </p>
      <button className="btn remove-btn" onClick={() => removeItem(item)}>
        remove
      </button>
    </div>
  );
}
export default SingleItem;
