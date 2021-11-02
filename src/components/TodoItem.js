import React from "react";
import { useDispatch } from "react-redux";
import { toggleCompleteAsync, deleteTodoAsync } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleCompleteAsync({ id: id, completed: !completed }));
  };
  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({ id: id }));
  };
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <input
          type="checkbox"
          checked={completed}
          className="mr-3"
          onChange={handleCompleteClick}
        />
        <span>{title}</span>
        <button onClick={handleDeleteClick} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};
export default TodoItem;
