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
      <div className="h-20 w-full bg-blue-500">box</div>

      <div className="m-5 h-50 w-50 bg-red-400 pt-5 pr-5 pb-5 pl-5">
        <div className="h-full w-full bg-blue-400"></div>
      </div>

      {/* 5. 보더 */}
      <div className="m-5 border-x border-y-2 border-r-2">border</div>
      <div className="rounded-md border-2 border-red-100">border color</div>

      {/* 6. 플렉스 컨테이너 */}
      <div className="flex flex-row items-start justify-evenly">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 flex-1 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>
    </div>
  )
}

export default App
