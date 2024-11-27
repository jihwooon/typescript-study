import {http, HttpResponse} from 'msw';
import {Banner} from "../models/banner.model";

export const bannersData: Banner[] = [
    {
        id: 1,
        title: '새로운 스마트폰 출시',
        description: '최신 기술이 탑재된 혁신적인 스마트폰이 출시되었습니다.',
        image: 'https://picsum.photos/id/222/1200/400',
        url: 'https://example.com/new-smartphone',
        target: '_blank',
    },
    {
        id: 2,
        title: '여름 휴가 특별 할인',
        description: '인기 휴양지 패키지 상품을 특별가로 만나보세요.',
        image: 'https://picsum.photos/id/228/1200/400',
        url: 'https://example.com/summer-deals',
        target: '_self',
    },
    {
        id: 3,
        title: '온라인 강좌 오픈',
        description: '집에서 편하게 들을 수 있는 다양한 온라인 강좌를 확인해보세요.',
        image: 'https://picsum.photos/id/227/1200/400',
        url: 'https://example.com/online-courses',
        target: '_blank',
    },
    {
        id: 4,
        title: '신선한 유기농 식품',
        description: '건강한 삶을 위한 신선한 유기농 식품을 만나보세요.',
        image: 'https://picsum.photos/id/225/1200/400',
        url: 'https://example.com/organic-products',
        target: '_self',
    },
    {
        id: 5,
        title: '첨단 가전제품 할인전',
        description: '스마트 홈을 위한 첨단 가전제품을 특별한 가격에 만나보세요.',
        image: 'https://picsum.photos/id/223/1200/400',
        url: 'https://example.com/appliance-sale',
        target: '_blank',
    },
];

export const banners = http.get('http://localhost:9999/banners', () => {
    return HttpResponse.json(bannersData, {
        status: 200,
    });
});
