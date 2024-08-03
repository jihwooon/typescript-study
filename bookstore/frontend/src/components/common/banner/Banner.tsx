import styled from 'styled-components';
import { Banner as IBanner } from '@/models/banner.model.ts';
import BannerItem from '@/components/common/banner/BannerItem.tsx';

interface Props {
  banners: IBanner[];
}

const Banners = ({ banners }: Props) => {
  return (
    <BannerStyle>
      {banners.map((item) => (
        <BannerItem key={item.id} banner={item} />
      ))}
    </BannerStyle>
  );
};

const BannerStyle = styled.div``;

export default Banners;
