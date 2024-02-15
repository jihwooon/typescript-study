import { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log('Mount!')

    return () => {
      console.log('UnMount!');
    }
  }, [])
  return <div>Unmount Testing Commpont</div>
}

const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
    </div>
  );
}

export default LifeCycle;
