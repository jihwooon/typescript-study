import {useMain} from "../hook/useMain";
import {styled} from "styled-components";
import MainReview from "../components/home/MainReview";
import Title from "../components/common/Title";
import MainNewBooks from "../components/home/MainNewBooks";
import MainBestBooks from "../components/home/MainBestBooks";

function Home() {
    const { reviews, newBooks, bestBooks } = useMain();
    return (
        <HomeStyle>
            {/* 배너 */}
            {/* 베스트셀러 */}
            <section className="section">
                <Title size="large">베스트 셀러</Title>
                <MainBestBooks books={bestBooks}/>
            </section>
            {/* 신가 */}
            <section className="section">
                <Title size="large">신간 안내</Title>
                <MainNewBooks books={newBooks} />
            </section>
            {/* 리뷰 */}
            <section className="section">
                <Title size="large">리뷰</Title>
                <MainReview reviews={reviews}/>
            </section>
        </HomeStyle>
    )
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export default Home;
