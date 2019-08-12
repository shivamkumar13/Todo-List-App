import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: uuid(),
      itemTitle: "",
      editItem: false
    };
  }
  handleChange = e => {
    this.setState({
      itemTitle: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      itemTitle: this.state.itemTitle
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      itemTitle: "",
      id: uuid(),
      editItem: false
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };

  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    console.log(selectedItem);

    this.setState(state => ({
      items: filteredItems,
      itemTitle: selectedItem.itemTitle,
      editItem: !state.editItem,
      id: id
    }));
  };

  render() {
    return (
      <div className="container m-2">
        <span className="display-4 ">Todo App</span>
        <TodoInput
          itemTitle={this.state.itemTitle}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
        />
        <TodoList
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          editItem={this.state.editItem}
        />
      </div>
    );
  }
}

export default Main;
