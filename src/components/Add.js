import React from "react";

function Add(props) {
  return (
    <div>
      <div style={{ marginBottom: "15px" }} className="addItems">
        <input
          style={{
            border: "1px solid rgb(52, 152, 219)",
            borderRadius: "5px",
            padding: "3px",
            outline: "none",
          }}
          type="text"
          placeholder="Add items"
          value={props.inputData}
          onChange={(e) => {
            props.setInputData(e.target.value);
          }}
        />
        <button
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "3px",
            color: "rgb(52, 152, 219)",
          }}
          className="fas fa-plus add-btn"
          title="Add Item"
          onClick={props.addItem}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Add;
