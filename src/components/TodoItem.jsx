import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { itemTitle, handleDelete, handleEdit, editItem } = this.props;

    return (
      <li
        className={`list-group-item text-capitalize d-flex justify-content-between my-2 rounded ${
          editItem ? "border-success" : ""
        }`}
      >
        <h6>{itemTitle}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success pl-2" onClick={handleEdit}>
            <i className="fas fa fa-edit" />
          </span>
          <span className="mx-2 text-danger pr-2" onClick={handleDelete}>
            <i className="fas fa fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
