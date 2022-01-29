import "./styles.css";
import React, { useEffect, useState } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore != "function") {
    return;
  }
  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
export default function App() {
  const begforlif = () => console.log("dontleave");
  useBeforeLeave(begforlif);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
