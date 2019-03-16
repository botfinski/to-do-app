import React from "react";
import propTypes from "prop-types";
import "./Task.scss";

const task = props => (
  <div className="Task">
    <div className="Task__content">{props.content}</div>
    <div className="Task__buttonContainer">
      <button onClick={props.deleteClicked} data-id={props.id}>
        Remove
        <span />
        <span />
      </button>
    </div>
  </div>
);

task.propTypes = {
  id: propTypes.number,
  content: propTypes.string,
  clicked: propTypes.func
};

export default task;
