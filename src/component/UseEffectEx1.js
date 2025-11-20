import { useEffect, useState } from "react";

function EffectEx(){
    let [value, setValue] = useState(1);
    let [num, setNum] = useState(1);
    // useEffect 호출은 3가지 형태
    // 1. DependencyList가 없는 경우
    //    -> 렌더링 될 때마다 호출
    // useEffect(()=>{
    //     console.log("useEffect 호출!");
    // })

    // 2. DependencyList가 빈 값일 경우
    //   -> 최초 로드되는 한번만 실행
    // useEffect(()=>{
    //     console.log("useEffect 호출!");
    // }, [])

    // 3. DependencyList에 값이 있는 경우(2개이상 넣는거 가능-리스트니까)
    //   -> 리스트 안에 있는 값이 변경되서 렌더링 될 때 호출
    useEffect(()=>{
        console.log("useEffect 호출!");
    }, [value])
    return(<>
        <div>value : {value}</div>
        <div>num : {num}</div>
        <hr></hr>
        <div>
            <button onClick={()=>{
                setValue(value+1);
            }}>value 증가!</button>

            <button onClick={()=>{
                setNum(num+1);
            }}>num 증가!</button>
        </div>
    </>)
}

export default EffectEx;