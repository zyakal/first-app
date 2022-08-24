import { useState } from "react";
function Exam2() {
  //   const data = useState(0);
  // useState의 두 인자중 첫번쨰는 초기값, 두번째는 함수(콜백)가 들어간다
  // useState는 함수형일때만 쓴다. 클래스형은 this.state로 쓴다.
  const [counter, setCounter] = useState(0);

  function countUp() {
    // counter = counter + 1;
    // console.log(counter);
    // console.log(data);
    // setCounter(counter + 1);
    //중복되는 변수명을 쓸수도 있기 때문에 preVal을 써서 counter를 불러와 쓴다
    setCounter((preVal) => preVal + 1);
  }
  return (
    <div>
      <h1>클릭 카운터 수 : {counter}</h1>
      <button onClick={countUp}>Click Me</button>
    </div>
  );
}

export default Exam2;
