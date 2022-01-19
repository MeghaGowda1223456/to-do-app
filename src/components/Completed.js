import React from "react";

function Completed({ onClick }) {
  return (
    <div>
      <button
        style={{
          width: "80px",
          color: "rgb(52, 152, 219) ",
          textDecoration: "lineThrough",
          padding: "4px",
          backgroundColor: "black",
          borderRadius: "6px",
          outline: "none",
          border: "1px solid rgb(52, 152, 219)",
        }}
        onClick={onClick}
      >
        completed
      </button>
    </div>
  );
}

export default Completed;
