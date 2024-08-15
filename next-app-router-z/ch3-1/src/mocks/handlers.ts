import {http, HttpResponse} from "msw";

export const handlers = [
    http.post('/api/login', () => {
        console.log('로그인');
        return HttpResponse.json({
            userId: 1,
            nickname: '',
            id: 'zerocho',
            image: '/5Udwvqim.jpg',
        }, {
            headers: {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
            }
        })
    }),
    http.post('/api/logout', () => {
        console.log('로그아웃');
        return new HttpResponse(null, {
            headers: {
                'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0'
            }
        })
    }),
    http.post('/api/users', async () => {
        console.log('회원 가입');
        return HttpResponse.text(JSON.stringify('user_exists'), {
         status: 403,
        })
    }),
]
