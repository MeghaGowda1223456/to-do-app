import React, { useState } from "react";
import RemoveAll from "./RemoveAll";
import Delete from "./Delete";
import Add from "./Add";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    console.log("jee");
    if (!inputData) {
      alert("cant add empty data");
    } else if (!items.includes(inputData)) {
      setItems([...items, inputData]);
      setInputData("");
    }
  };
  const delet = (id) => {
    const updateditems = items.filter((elem, ind) => {
      console.log(id);
      console.log(ind);
      return ind !== id;
    });
    setItems(updateditems);
  };

  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      {" "}
      <div>
        <div
          style={{
            background: "transpirant",
            width: "40%",
            margin: "auto",
            borderRadius: "20px",
            padding: "30px",
          }}
          className="main_div"
        >
          <div className="child_div">
            <i
              style={{
                fontSize: "45px",
                color: "white",
                marginRight: "32px",
                marginBottom: "15px",
              }}
              class="far fa-list-alt"
            ></i>
            <Add
              addItem={addItem}
              inputData={inputData}
              setInputData={setInputData}
            />
            <Delete delete={delet} item={items} />
            {/* <RemoveAll items={items} remove={removeAll} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
