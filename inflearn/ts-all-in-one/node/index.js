import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';

// http 요청에 대한 단순 카운터 커스텀 메트릭 생성 
export const requests = new Counter('http_reqs');

// 테스트의 스테이지를 지정할 수 있다. (ramp up/down patterns) 형태이며 options 객체에 VU의 수를 각각 지정이 가능하다. 
export const options = {
  stages: [
    { target: 20, duration: '1m' }, // ramp up 을 1분동안 20 vuser를 생성한다. 
    { target: 15, duration: '1m' }, // 이후 1분동안 15명의 vuser로 요청을 보낸다. 
    { target: 0, duration: '1m' },  // ramp down 을 1분동안 0 vuser로 다운시킨다.
  ],
  thresholds: {
    http_reqs: ['count < 100'], // 테스트 종료 조건, count 값이 100 이하인경우 정상, 아닌경우 비정상이다. 
  },
};

export default function () {
  // 우리의 HTTP 요청, 중요 우리는 응답 정보를 res에 저장한다. 이는 나중에 접근할 수 있다. 
  const res = http.get('http://test.k6.io');

  // 1초 대기
  sleep(1);

  // check 수행 
  // r.status 가 200인지 확인하고, Feel free to browse 값이 포함된경우 라면 true, 아니면 false
  const checkRes = check(res, {
    'status is 200': (r) => r.status === 200,
    'response body': (r) => r.body.indexOf('Feel free to browse') !== -1,
  });
}
