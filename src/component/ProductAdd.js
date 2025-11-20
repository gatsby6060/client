import { useEffect, useRef, useState } from "react";

function ProductAdd() {
    let nameRef = useRef(null); //useRef는 DOM을 잡거나, 리렌더 없이 값을 유지할 때 사용 (그냥 let방식은 리렌더시 완전히 초기화됨)
    let priceRef = useRef(null); //리렌더 없이 화면 유지할 때 사용 
    let [price, setPrice] = useState(); //useState는 값이 바뀌면 화면을 다시 그려야 할 때 사용


    function fnNameRef() {
        console.log(nameRef.current.value); //값을 꺼내고 싶을 때
        nameRef.current.focus();
    }

    function fnAdd() {
        //가격(숫자)을 입력 후 '저장'버튼 클릭 시
        //가격이 0이하이면 '1이상의 숫자를 입력해주세요' 알림 후
        //가격 input 박스에 focus주기
        // console.log(priceRef.current.value); //값을 꺼내고 싶을 때
        // alert(priceRef.current.value);
        if (priceRef.current.value <= 0) {
            alert("1이상의 숫자를 입력해주세요");
            priceRef.current.focus();
        }

        let param ={
            productName : nameRef.current.value,
            price : priceRef.current.value,
        }
        //tbl_product테이블에 저장
        fetch("http://localhost:3010/product/", {
            method: "POST",
            headers: { "Content-type": "application/json" }, //headers임!
            body: JSON.stringify(param),
        })
            .then(res => res.json())
            .then(data => {
                alert("제품추가 되었습니다.");
                // location.href = "product-list.html";
            })

    }

    //최초 1번만
    useEffect(() => {
        nameRef.current.focus();
    }, [])

    let obj = document.querySelector("#price");
    return <>
        <div>제품명 : {nameRef.current?.value}</div>
        <div>가격 : {price}</div>
        <hr></hr>

        <div>제품명 : <input ref={nameRef}></input></div>
        {/* <div>가격 : <input value={price} onChange={(e)=>{
            setPrice(e.target.value);
        }}></input></div> */}
        <div>가격 : <input ref={priceRef}></input></div>
        <div>
            <button onClick={fnNameRef}> focus</button>
            <button onClick={fnAdd}>저장</button>
        </div>
    </>
}

export default ProductAdd;