import React, { Component } from "react";

import List from "../list";
import "./app.css";

export default class App extends Component {
  maxId = 10;

  state = {
    someData: [
      this.createItem("Drink Coffee", true, true),
      this.createItem("Create React App"),
      this.createItem("Study Bible", false, true),
      this.createItem("Read book of Hemingway")
    ]
  };
  createItem(label, done = false, important = false) {
    return {
      label,
      done,
      important,
      id: this.maxId++
    };
  }
  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }
  makeToggleImportant = id => {
    this.setState(({ someData }) => {
      return {
        someData: this.toggleProperty(someData, id, "important")
      };
    });
  };
  makeToggleDone = id => {
    this.setState(({ someData }) => {
      return {
        someData: this.toggleProperty(someData, id, "done")
      };
    });
  };
  render() {
    return (
      <div className="app">
        <List
          someProps={this.state.someData}
          onToggleImportant={this.makeToggleImportant}
          onToggleDone={this.makeToggleDone}
        />
      </div>
    );
  }
}
