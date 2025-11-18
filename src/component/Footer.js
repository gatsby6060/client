function Footer(props) {
    console.log("Footer.js의 Footer의 컨텐츠===>", props.contents);
    return <>
        <div>

            {
                props.contents != null ?

                    <a href="/" onClick={(e) => {
                        //     e.preventDefault();
                        //     if (props.contents != null) {
                        
                        alert(props.contents)
                        // };
                    }}>{props.title}</a>

                    :

                    <a>뭔가 에러입니다</a>
            }

        </div>
    </>
}

export default Footer;