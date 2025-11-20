import { useContext } from "react";
import { PersonContext } from "./context/PersonContext";

function Content1() {
    let user = useContext(PersonContext);
    console.log(user);
    return <>
        <div>{"Context로 보낸  name : " + user.name}</div>
    </>
}

function Content2(props) {

    return <>
        {/* ContextEx가 보낸 name 출력 */}
        <div>{"props로 보낸 name : " + props.name}</div>
    </>
}

function Body(props) {

    return <>
        <Content1></Content1>
        <Content2 name={props.name}></Content2>
    </>
}

function Project(props) {

    return <>
        <Body name={props.name}></Body>
    </>
}

function ContextEx() {
    let name = "홍길동";
    
    // content1한테 위에 3개 보내고 싶음
    let user = {
                    name : "홍길동", 
                    age : 30, 
                    addr : "인천",
                };
    return <>
        <PersonContext.Provider value={user}>
            <Project name={name}></Project>
        </PersonContext.Provider>
    </>
}

export default ContextEx;