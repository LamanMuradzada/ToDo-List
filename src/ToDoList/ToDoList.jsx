import React, { useState } from "react";
import "./ToDoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDoListItem,
  removeToDoListItem,
  editToDoListItem,
  removeAllToDoListItem,
} from "../Redux/ToDoList/ToDoListActions";
library.add(faEdit, faRemove);

const ToDoList = () => {
  let [itemValue, setItemValue] = useState("");

  let [editMode, setEditMode] = useState(false);

  let [editItemId, setEditItemId] = useState();


  let items = useSelector((state) => state.items);


  let dispatch = useDispatch();

  let addItem = () => {
    if (itemValue?.length !== 0) {
      dispatch(addToDoListItem({ id: items?.length + 1, item: itemValue }));
      setItemValue("");
    }
  };

  let editItem = (id) => {
    let editedItem = items?.find((item) => item?.id === id);
    setEditItemId(id);
    setItemValue(editedItem?.name);
  };

  let submitEditedItem = () => {
    if(itemValue === ""){
        setEditMode(true);
    } else{
        dispatch(editToDoListItem({ id: editItemId, item: itemValue }));
        setEditMode(false);
        setItemValue("");
    }
  };

  let removeItem = (id) => {
    dispatch(removeToDoListItem({ id: id }));

  };

  let removeAll = () => {
    dispatch(removeAllToDoListItem());
  };

  const handleChange = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    } else {
      setItemValue(e.currentTarget.value.trim());
    }
  };

  return (
    <div className="todo-list">
      <h1>To Do List</h1>
      <div className="add-item">
        <input type="text" value={itemValue} onChange={handleChange} />
        {editMode ? (
          <button onClick={submitEditedItem}>Edit</button>
        ) : (
          <button onClick={addItem}>Add</button>
        )}
      </div>

      {items?.length > 0 ? (
        items.map((item) => (
          <div className="item" key={item?.id}>
            <div className="item-name-part">
              <div className="id">{item?.id}.</div>
              <div>{item?.name}</div>
            </div>

            <div className="edit-remove-part">
              <div
                onClick={() => {
                  setEditMode(true);
                  editItem(item?.id);
                }}
              >
                <FontAwesomeIcon icon="edit" />
              </div>

              <div onClick={() => removeItem(item?.id)}>
                <FontAwesomeIcon icon="remove" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="noItems">
          <p className="">There are No Items</p>
        </div>
      )}

      {items?.length > 0 ? (
        <button className="remove-all" onClick={removeAll}>
          Remove All
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ToDoList;
