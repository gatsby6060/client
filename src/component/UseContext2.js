import { useContext, useState } from "react";
import { PersonContext } from "./context/PersonContext";

function Content1() {
    let param = useContext(PersonContext);
    return <>

        <div style={{
            border: "1px solid black",
            height: "100px",
            width: "250px",
            margin: "10px",
        }}>
            contents1
            <div>
                {/* 헤더의 '로그인/로그아웃'버튼 클릭시 */}
                {/* 이곳의 내용으로 로그인되었습니다 / 로그아웃 되었습니다. */}
                {/* 2개의 문구가 왔다갔다 하도록 */}
                {param.isloginout ? 
                <div style={{ color: 'blue' }}>로그인 되었습니다.</div> : 
                <div style={{ color: 'red' }}>로그아웃 되었습니다.</div>}


            </div>
        </div>
    </>
}

function Content2() {

    return <>

        <div style={{
            border: "1px solid black",
            height: "100px",
            width: "250px",
            margin: "10px",
        }}>

            contents2
        </div>
    </>
}

function Body() {

    return <>
        <div style={{
            border: "1px solid black",
            height: "300px",
            width: "400px",
            margin: "10px",
        }}>
            Body
            <Content1></Content1>
            <Content2></Content2>
        </div>
    </>
}

function Header() {

    let param = useContext(PersonContext);
    console.log(param.isloginout);
    // console.log(param.setisloginout);
    return <>
        <div style={{
            border: "1px solid black",
            height: "80px",
            width: "400px",
            margin: "10px",
        }}>
            Header
            <div><button onClick={() => {
                // !(param.isloginout);
                param.setisloginout(!param.isloginout);

            }}>로그인 / 로그아웃</button></div>
            <div>{param.isloginout}</div>
            {/* <div>{param.setisloginout}</div> */}
        </div>
    </>
}

function Project() {

    return <>
        <div style={{ border: "1px solid black", height: "600px" }}>
            Project
            <Header></Header>
            <Body></Body>
        </div>
    </>
}

function ContextEx() {
    // let isloginout = false; //반전버튼용 일단
    let [isloginout, setisloginout] = useState(false);
    let param = {
        isloginout: isloginout,
        setisloginout: setisloginout,
    }
    return <>
        <PersonContext.Provider value={param}>
            <Project></Project>
        </PersonContext.Provider>
    </>
}

export default ContextEx;