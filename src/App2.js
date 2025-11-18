import { useState } from "react";
function App() {

    let num = 1;
    // let stateNum = useState(1);
    // let value =  stateNum[0]; //1
    // let setValue = stateNum[1] // 함수 (set)

    let [value, setValue] = useState(1);

    // console.log("stateNum => ", stateNum);

    function increaseNum(){
        setValue(prev => prev+1);
    }

    function decreaseNum(){
        setValue(prev => prev-1);
    }

    return (
        <>
            <div>
                현재 숫자 :
                {
                value >= 5 ?
                    value + "(큰숫자)"
                    :
                    value + "(작은 숫자)"
                }
            </div>
            <div>
                <button onClick={() => {
                    setValue(value + 1);
                    console.log(value);
                }}>숫자 증가!!</button>
                <button onClick={() => {
                    setValue(value - 1);
                    console.log(value);
                }}>숫자 감소!!</button>
            </div>

            <div>
                <button onClick={increaseNum}>함수 숫자 증가!</button>
                <button onClick={decreaseNum}>함수 숫자 감소!</button>
            </div>
        </>
    )
}

export default App;