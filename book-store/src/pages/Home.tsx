import Title from "../components/common/Title";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";

function Home() {
    return <>
        <Title size="medium" color="background">제목 테스트</Title>
        <div>home body</div>
        <Button size="large" scheme="primary" disabled={true}>버튼 테스트</Button>
        <InputText placeholder="여기에 입력해주세요"></InputText>
    </>
}

export default Home;
