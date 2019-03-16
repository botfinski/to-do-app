import React from "react";
import Task from "./Task/Task";
import propTypes from "prop-types";
import "./TaskList.scss";

const taskList = props => {
  const reverseTasks = props.tasks.slice().reverse();

  return (
    <div className="TaskList">
      {reverseTasks.map((task, index) => {
        return <Task key={"key" + index} id={task.id} content={task.content} deleteClicked={props.deleteClicked} />;
      })}
    </div>
  );
};

taskList.propTypes = {
  notes: propTypes.array
};

export default taskList;
