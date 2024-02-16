import React, { useEffect, useState } from "react";

const CountA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CountB update - count : ${count}`)
  })
  return <div>{count}</div>
});

const CountB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log(`CountB update - count : ${obj.count}`)
  })
  return <div>{obj.count}</div>
})

const OptimizedTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Count A</h2>
        <CountA count={count} />
        <button
          onClick={() => setCount(count + 1)}
        >A button</button>
      </div>
      <div>
        <h2>Count B</h2>
        <CountB obj={obj} />
        <button
          onClick={() => setObj({
            count: obj.count + 1,
          })}>B button</button>
      </div>
    </div >
  )
}

export default OptimizedTest;
