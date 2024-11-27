import {useMain} from "../hook/useMain";
import {styled} from "styled-components";
import MainReview from "../components/home/MainReview";

function Home() {
    const { reviews } = useMain();
    return (
        <HomeStyle>
            {/* 배너 */}
            {/* 베스트셀러 */}
            {/* 신가 */}
            {/* 리뷰 */}
            <MainReview reviews={reviews}/>
        </HomeStyle>
    )
}

const HomeStyle = styled.div``

export default Home;
