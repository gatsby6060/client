import './App.css'

function List(props) {
    console.log(props);
    console.log(props.list);


    // let list = <>
    //  <li>{props.list[0].name}</li>
    //  <li>{props.list[1].name}</li>
    //  <li>{props.list[2].name}</li>
    // </>
    // let list = [
    //  <li>{props.list[0].name}</li>
    //  <li>{props.list[1].name}</li>
    //  <li>{props.list[2].name}</li>
    // ]
    // let list =[];



    // let list = [];
    // for (let i = 0; i < props.list.length; i++) {
    //     list.push(<li key={props.list[i].id}>{props.list[i].name}</li>);
    //     // [<li>hong</li>,<li>kim</li>,<li>park</li>] 뭐 이런식?
    // }

    // let newList = props.list.map(item => {
    //     return <li key={item.id}>{item.id}</li>
    // });
    // console.log("아래는 뉴");
    // console.log(newList);

    return (
        <>
            {/* <div>{list}</div> */}
            <ol>
                {props.list.map(item => {
                    return <li key={item.id}>{item.name}</li>
                })}
            </ol>
        </>
    )
}

function App() {
    let userList = [
        { id: "hong", name: "홍길동" },
        { id: "kim", name: "김철수" },
        { id: "park", name: "박영희" },
    ];

    let testList = [
        { id: "hong", name: "홍길동", age: 30 },
        { id: "kim", name: "김철수", age: 25 },
        { id: "park", name: "박영희", age: 22 },
    ];


    return (
        <>
            <List list={userList}></List>
            <table>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>나이</th>
                </tr>

                {testList.map(item => {
                    // console.log("아이탬은");
                    // console.log(item);
                    return <tr key={item.id}>
                                <td >{item.id}</td>
                                <td >{item.name}</td>
                                <td >{item.age}</td>
                            </tr>
                })}

            </table>
        </>
    )
}


export default App;