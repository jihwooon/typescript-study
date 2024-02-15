import DiaryItem from "./DiaryItem";

const DiaryList = ({ onRemove, dummayList }) => {

  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{dummayList.length}개의 일기가 있습니다.</h4>
      <div>
        {dummayList.map((it) =>
          <DiaryItem onRemove={onRemove} key={it.id} {...it} />
        )}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
}

export default DiaryList;
