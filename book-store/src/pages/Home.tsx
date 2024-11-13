import Title from "../components/common/Title";
import Button from "../components/common/Button";

function Home() {
    return <>
        <Title size="medium" color="background">제목 테스트</Title>
        <div>home body</div>
        <Button size="large" scheme="primary" disabled={true}>버튼 테스트</Button>
    </>
}

export default Home;
