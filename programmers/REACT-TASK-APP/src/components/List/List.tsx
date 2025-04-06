import { List as IList } from "../../types"

interface Props {
  list: IList;
  boardId: string
}

const List = ({ list, boardId }: Props) => {
  return (
    <div>List</div>
  )
}

export default List