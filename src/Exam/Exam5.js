import { useState, useEffect } from "react";
import Button from "./Button";
import "./Exam3.css";

export default function Exam5() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("aaa");
  //   console.log(`serch for ${keyword}`);
  const increse = () => {
    setCounter(counter + 1);
  };
  const decrese = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const onChangeText = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    console.log(1);
  }, [keyword]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        value={keyword}
        onChange={onChangeText}
      />
      <h1>{counter}</h1>
      <Button onClick={increse} text="Plus" color="blue" />
      <Button onClick={decrese} text="Minus" color="red" />
    </div>
  );
}
