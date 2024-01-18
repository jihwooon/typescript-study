import { useState } from 'react';
import './Body.css';

function Body() {
  const [light, setLight] = useState("OFF")

  return (
    <div className='body'>
     <Lightbulb light={light}/>
     <StaticLightbulb/>
     <button onClick={() => setLight("ON")}>버튼1</button>
     <button onClick={() => setLight("OFF")}>버튼2</button>
    </div>
  );
}

const StaticLightbulb = () => {
  return (
    <div style={{backgroundColor: "gray"}}>OFF</div>
  )
}

const Lightbulb = ({ light }) => {
  return (
    <>
       {light === 'ON' ?(
        <div style={{backgroundColor: "orange"}}>ON</div>
      ) : (
        <div style={{backgroundColor: "gray"}}>OFF</div>
      )}
    </>
  )
}


export default Body
