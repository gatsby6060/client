
function Header(props) {
  console.log("Header===>", props);
  // props.fnHeader();
  return (
    <>
      <h1>
        <a href="/" onClick={(e) => {
          e.preventDefault();
          if (props.fnHeader != null) {
            props.fnHeader();
          };
        }}>{props.title}</a>
      </h1>
    </>
  )
}

function List(props) {
  // console.log(props.list);
  let list = [];
  for (let i = 0; i < props.list.length; i++) {
    list.push(
      <>
        {props.fnSubject != null ?

          <li key={props.list[i].subNo}>
            {<a href="/" onClick={(e) => {
              e.preventDefault();
              props.fnSubject(props.list[i].subName);
            }}>{props.list[i].subName}</a>
            }
          </li>
          :
          <li key={props.list[i].subNo}>
            {props.list[i].subName}
          </li>
        }
      </>
    );
    // list.push(<a key={props.list[i].subNo}>{props.list[i].subName}</a>);
  }
  return (
    <div>
      <ul>
        {list}
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <>
      <h1>푸터!!ffffffffffffffff</h1>
    </>
  )
}

function App() {

  let test = <div>변수안에 넣은 html 태그 ! </div>
  let subjectList = [
    { subNo: 1, subName: "자바", bookName: "참좋은 자바" },
    { subNo: 2, subName: "오라클", bookName: "쉽게 쓴 오라클" },
    { subNo: 3, subName: "html", bookName: "재미있는 html" },
    { subNo: 4, subName: "react", bookName: "어려운 react" }
  ];

  let subjectList2 = [
    { subNo: 1, subName: "2자바2", bookName: "참좋은 자바" },
    { subNo: 2, subName: "2오라클2", bookName: "쉽게 쓴 오라클" },
    { subNo: 3, subName: "2html2", bookName: "재미있는 html" },
    { subNo: 4, subName: "2react2", bookName: "어려운 react" }
  ];

  // let list = [];
  // for (let i = 0; i < subjectList.length; i++) {
  //   list.push(<li>{subjectList[i].subName}</li>);
  // }

  // list = [<li>자바<li>,
  //          ...
  //        ]

  return (
    <div>

      <Header
        title="첫번째 헤더!!" fnHeader={() => {
          alert("안녕!");
        }}
      ></Header>

      <Header title="서브 헤더!!"></Header>

      <List list={subjectList} fnSubject={(subName) => {
        alert(subName);
      }}></List>

      <List list={subjectList2}></List>
      <Footer></Footer>

      {/* {test} */}
      {/* <ul>
        {list}
      </ul> */}
    </div>
  )
}

export default App;
