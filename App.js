import "./styles.css";
import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: " sec1"
  },
  {
    tab: "section 2",
    content: "sec2"
  }
];
const useInput = (initialtext, validator) => {
  const [value, setValue] = useState(initialtext);
  const onChange = (e) => {
    const {
      target: { value }
    } = e;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
const useTab = (firsttab, alltabs) => {
  if (!alltabs || !Array.isArray(alltabs)) {
    return;
  }
  const [currentidx, setcuridx] = useState(firsttab);
  return {
    curItem: alltabs[currentidx],
    changeItem: setcuridx
  };
};
export default function App() {
  const sayHello = () => {
    console.log("Hello");
  };
  const maxLen = (value) => value.length < 10;
  const name = useInput("owen", maxLen);
  const { curItem, changeItem } = useTab(0, content);
  const [item, setItem] = useState(1);
  const onClick = () => {
    setItem((current) => current + 1);
  };
  const onClick2 = () => {
    if (item > 0) {
      setItem((current) => current - 1);
    } else {
      setItem(0);
    }
  };
  const [num, setNum] = useState(0);
  const [anum, setANum] = useState(0);
  //[]안에 num 을 넣으면 num 의 값이 바뀔때마다 출력 , anum 을 넣으면 anum이 바뀔떄 마다 출력 , 비어있으면 실행됬을 때 1번만 출력
  useEffect(() => {
    sayHello();
  }, []);

  return (
    <div className="App">
      <button onClick={onClick}>증가</button>
      <button onClick={onClick2}>감소</button>
      <h1>{item}</h1>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{curItem.content}</div>
      <input placeholder="name" {...name} />
      <button onClick={() => setNum(num + 1)}>{num}</button>
      <button onClick={() => setANum(anum + 1)}>{anum}</button>
    </div>
  );
}
