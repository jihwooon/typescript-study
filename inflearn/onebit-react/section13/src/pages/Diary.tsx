import { useParams } from "react-router"

function Diary() {
  const params = useParams()

  return (
    <div>{params.id}번 일기입니다 ~~</div>
  )
}

export default Diary
