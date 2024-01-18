import './Body.css';
import Button from './Button';

function Body() {

  // 전개 연산자
  const buttonProps = {
    text: '버튼',
    color: 'red',
    a:1,
    b:2,
    c:3
  }

  return (
    <div className='body'>
      <h1>BODY</h1>
      <Button {...buttonProps}>
        <div>버튼</div>
      </Button>
      <Button text={"2번 버튼"}/>
      <Button text={"3번 버튼"}/>
    </div>
  );
}

export default Body
