import { useContext } from "react";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext, DiaryDispatchContext } from "./App";

const DiaryList = () => {
  const dummayList = useContext(DiaryStateContext)

  const { onRemove, onEdit } = useContext(DiaryDispatchContext);

  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{dummayList.length}개의 일기가 있습니다.</h4>
      <div>
        {dummayList.map((it) =>
          <DiaryItem onRemove={onRemove} onEdit={onEdit} key={it.id} {...it} />
        )}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
}

export default DiaryList;
