function App() {
  return (
    <div>
      <div className="text-xs text-red-500">text-xs</div>
      <div className="text-sm">text-sm</div>
      <div className="text-8xl">text-8xl</div>
      <div className="text-2xl">text-2xl</div>
      <div className="text-[13px]">text-13</div>
      {/* 2. 백그라운드 컬러 */}
      <div className="bg-amber-50">amber-500</div>

      {/*3/ 사이즈 */}
      <div className="w-full h-20 bg-blue-500">box</div> 

      <div className="h-50 w-50 bg-red-400 pt-5 pr-5 pb-5 pl-5 m-5">
        <div className="h-full w-full bg-blue-400"></div>
      </div>
    </div>
  )
}

export default App
