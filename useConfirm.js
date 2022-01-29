import "./styles.css";
import React, { useEffect, useState, useRef } from "react";

const useConfirm = (message = "", callback, rejection) => {
  if (!callback && typeof callback !== "function") {
    return;
  }
  if (!rejection && typeof rejection !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};
export default function App() {
  const deleteword = () => console.log("Delete");
  const abort = () => console.log("abort");
  const confirmDelete = useConfirm("qwe", deleteword, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
}
