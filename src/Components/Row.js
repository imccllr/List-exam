import React, { useState } from "react";
import './../Styles/Row.css';
import { v4 as uuidv4 } from 'uuid';

const Row = ({ register }) => {
  return (
      <React.Fragment key={uuidv4()}>
      <tr key={uuidv4()} className={register.completed ? "row-completed" : "row-non-completed"} >
        <td className="cell-centered">{register.id}</td>
        <td className="cell-centered">{register.userId}</td>
        <td >{register.title}</td>
        <td className="cell-centered">{register.completed ? '✓' : '✕'}</td>
      </tr>
      </React.Fragment>
  );
};

export default Row;
