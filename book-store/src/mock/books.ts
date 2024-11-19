import {http, HttpResponse} from 'msw';
import {faker} from '@faker-js/faker';
import {Book} from "../models/book.model";

const bestBooksData: Book[] = Array.from({
    length: 10,
}).map((_, index) => ({
    id: index,
    title: faker.lorem.sentence(),
    img: faker.helpers.rangeToNumber({ min: 100, max: 200 }),
    category_id: faker.helpers.rangeToNumber({
        min: 0,
        max: 2,
    }),
    form: '종이책',
    categoryName: '소설',
    isbn: faker.commerce.isbn(),
    summary: faker.lorem.paragraphs(),
    detail: faker.lorem.paragraphs({ min: 1, max: 100 }),
    author: faker.person.firstName(),
    pages: faker.helpers.rangeToNumber({
        min: 100,
        max: 500,
    }),
    contents: faker.lorem.paragraphs(),
    price: faker.helpers.rangeToNumber({
        min: 10000,
        max: 50000,
    }),
    likes: faker.helpers.rangeToNumber({ min: 0, max: 100 }),
    pubDate: faker.date.past().toISOString(),
}));

export const bestBooks = http.get('http://localhost:9999/books/best', () => {
    return HttpResponse.json(bestBooksData, {
        status: 200,
    });
});

export const bookId = http.get('http://localhost:9999/books/:id', ({ params }) => {
    const { id } = params;
    const book = bestBooksData.find(book => book.id === Number(id));

    if (!book) {
        return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(book);
});


export const books =  http.get('http://localhost:9999/books', async ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;
    const limit = Number(url.searchParams.get('limit')) || 10;
    const category = url.searchParams.get('category');

    let filteredBooks = [...bestBooksData];

    // Category 필터링
    if (category) {
        filteredBooks = filteredBooks.filter(
            book => book.category_id === Number(category)
        );
    }

    // 페이지네이션 처리
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

    return HttpResponse.json({
        books: paginatedBooks,
        pagination: {
            totalCount: filteredBooks.length,
            currentPage: page
        }
    })
});
