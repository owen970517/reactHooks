import "./styles.css";
import React, { useEffect, useState, useRef } from "react";

const useNotification = (title, option) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotifi = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, option);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, option);
    }
  };
  return fireNotifi;
};

export default function App() {
  const triggerNoti = useNotification("qwesdsa", {
    body: "sadsadxzcwqesad"
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNoti}>hello</button>
    </div>
  );
}
