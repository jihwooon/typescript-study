import MainReview from "@/components/home/MainReview";
import { useMain } from "@/hooks/useMain";
import styled from "styled-components";

const Home = () => {

  const {reviews} = useMain()
  
  return (
    <HomeStyle>
      {/* 배너 */}
      <h2>배너</h2>
      {/* 베스트 셀러 */}
      <h2>베스트 셀러</h2>
      {/* 신간 */}
      <h2>신간</h2>
      {reviews && <MainReview reviews={reviews}/>}
    </HomeStyle>
  );
};

const HomeStyle = styled.div``;

export default Home;
