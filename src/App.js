import Header from './component/Header'
import Footer from './component/Footer'

function App() {
    return (<>
        <Header title="안녕하세요"></Header>

        {/*첫 푸터는 푸터입니다 라고 출력함  */}
        {/* 클릭을 하면 '첫번째 푸터' alert창 출력 */}
        <Footer title = "푸터입니다" contents="첫번째 푸터"></Footer>

        {/* 두번째 푸터는 '서프푸터입니다' 라고 출력 */}
        {/* Footer 내용을 클릭을 하면 '두번째 푸터' alert창 출력 */}
        <Footer title = "서프푸터입니다"  contents="두번째 푸터"></Footer>
    </>)
}

export default App;