import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit, editItem } = this.props;

    return (
      <div className="card card-body m-3">
        <ul className="m-0 p-0">
          <h3>Todo List</h3>

          <div>
            {items.map(item => {
              return (
                <TodoItem
                  key={item.id}
                  itemTitle={item.itemTitle}
                  handleDelete={() => handleDelete(item.id)}
                  handleEdit={() => handleEdit(item.id)}
                  editItem={editItem}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={clearList}
            className="btn btn-danger text-capitalize"
          >
            Clear List
          </button>
        </ul>
      </div>
    );
  }
}

export default TodoList;
