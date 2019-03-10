import React, { Component } from "react";
import "./list-item.css";

export default class ListItem extends Component {
  state = {
    done: false,
    important: false
  };
  render() {
    const {
      label,
      important,
      done,
      onImportant,
      onDone,
      onDeletedItem
    } = this.props;
    let classNames = "list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onDone}>
          {label}
        </span>
        <button className="btn btn-exclamation" onClick={onImportant}>
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-trash" onClick={onDeletedItem}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
