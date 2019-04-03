import React from "react";

import ListItem from "../list-item";
import "./list.css";

const List = ({ someProps, onToggleImportant, onToggleDone }) => {
  const elements = someProps.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <ListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="list-group">{elements}</ul>;
};

export default List;
