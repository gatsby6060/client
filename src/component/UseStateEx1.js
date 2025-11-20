import { useState } from "react";



function StateEx() {
    let varNum = 1;
    let [stateNum, setStateNum] = useState(1);

    function fnDecreaseNum() {
        setStateNum(stateNum - 1);
    }

    return (
        <>
            <div>varNum : {varNum}</div>
            <div>stateNum : {stateNum}</div>
            <hr></hr>
            <div>
                <button onClick={() => {
                    varNum += 1;
                    console.log(varNum);
                }}>varNum 증가</button>
                <button onClick={() => {
                    setStateNum(stateNum + 1);
                    // setStateNum(prev=>prev+1);
                }}>stateNum 증가</button>
                {/* 바깥쪽에서 fnDecreaseNum 함수 만들어서 호출 */}
                <button onClick={ fnDecreaseNum }>stateNum 감소</button>
            </div>
        </>
    )
}

export default StateEx;