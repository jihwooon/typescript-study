import Title from '@/components/common/Title';
import MainNewBooks from '@/components/home/MainNewBooks';
import MainReview from '@/components/home/MainReview';
import { useMain } from '@/hooks/useMain';
import styled from 'styled-components';
import MainBest from '@/components/home/MainBest.tsx';
import Banners from '@/components/common/banner/Banner.tsx';
import { useMediaQuery } from '@/hooks/useMediaQuery.ts';

const Home = () => {
  const { reviews, newBooks, bestBooks, banners } = useMain();
  const { isMobile } = useMediaQuery();

  return (
    <HomeStyle>
      <Banners banners={banners} />

      <section className="section">
        <MainBest books={bestBooks} />
      </section>

      <section className="section">
        <Title size="large">신간 안내</Title>
        <MainNewBooks books={newBooks} />
      </section>

      <section className="section">
        <Title size="large">리뷰</Title>
        {reviews && <MainReview reviews={reviews} />}
      </section>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default Home;
