import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { itemTitle, handleChange, handleSubmit, editItem } = this.props;

    return (
      <div className="card card-body m-3 ">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-2">
            <div className="input-group-prepend pr-1">
              <div className="input-group-text bg-dark text-white rounded">
                <i className="fas fa fa-book"> </i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize rounded"
              placeholder=" add a todo item"
              value={itemTitle}
              onChange={handleChange}
            />
          </div>
          {editItem ? (
            <button type="submit" className="btn btn-block btn-success">
              Edit Item
            </button>
          ) : (
            <button type="submit" className="btn btn-block btn-primary">
              Add Item
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default TodoInput;
