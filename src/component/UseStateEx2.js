import { useState } from "react";

function StateEx() {
    let [toggle, setToggle] = useState(true);
    // let [stateColor, setstateColor] = useState(1);

    // function fnColor() {
    //     // setstateColor(if (stateColor == "blue") { stateColor == "red" } else { stateColor == "blue" } );
    //     setstateColor(stateColor === "blue" ? "red" : "blue");
    // }

    return (
        <>
            <div>
                <button onClick={()=>{
                    setToggle(!toggle);
                }}>blue/red</button>
            </div>
            <div style={{color : toggle ? "blue" : "red", fontWeight : "bold"}}>글자</div>
        </>
    )
}

export default StateEx;