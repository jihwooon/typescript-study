import Image from 'next/image';
import Link from 'next/link';
import xLogo from '../../../../public/x.png'

const Home = () => {
  return (
    <>
      <div>
        <Image src={xLogo} alt="logo" width={200} height={200} />
      </div>
      <div>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup">계정 만들기</Link>
          <p>가입하시려면 쿠키 사용을 포함해 이용약관과 개인정보 처리방침에 동의해야 합니다.</p>
          <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/i/flow/login">로그인</Link>
      </div>
    </>
  );
};

export default Home;
