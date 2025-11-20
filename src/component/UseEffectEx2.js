import { useEffect, useState } from "react";



function EffectEx() {
    // let text = "";
    let [text, setText] = useState("");
    // let list =[]; 
    let [list, setList] = useState([]);

    function fnList() {
        fetch("http://localhost:3010/product?keyword="+text)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // list = data.list;
                setList(data.list);
            })
    }

    useEffect(() => {
        // console.log("서버에 요청해서 제품 목록을 가져오는 부분");
        fnList();
    }, [])

    return (
        <>
            <div><input value={text} onChange={(e) => {
                // console.log(e.target.value);
                setText(e.target.value);
            }}></input>
                <button onClick={fnList}>검색</button>
            </div>
            <div>text : {text}</div>

            <hr></hr>

            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => {
                        return <tr key={item.productId}>
                            <td>{item.productId}</td>
                            <td>{item.productName}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => {
                                    if (!window.confirm("정말삭제?")) {
                                        return;
                                    }

                                    fetch("http://localhost:3010/product/" + item.productId, {
                                        method: "DELETE"
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            alert("삭제되었습니다.");
                                            fnList();
                                        })
                                }}>삭제</button>
                            </td>
                        </tr>

                    })}
                </tbody>
            </table>
        </>
    )
}

export default EffectEx;