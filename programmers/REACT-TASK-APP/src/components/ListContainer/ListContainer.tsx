import { List as IList } from "../../types";
import ActionButton from "../ActionButton/ActionButton";
import List from "../List/List";
import { listsContainer } from "./ListContainer.css";

interface Props {
  boardId: string;
  lists: IList[];
}

const ListContainer = ({ boardId, lists } : Props) => {
  return (
    <div className={listsContainer}>
      {
        lists.map((list) => (
          <List 
            key={list.listId} 
            list={list} 
            boardId={boardId}
          />
        ))
      }
      <ActionButton />
    </div>
  )
}

export default ListContainer
