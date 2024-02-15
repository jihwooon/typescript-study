const DiaryItem = ({ onRemove, id, author, content, emotion, create_date }) => {
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  }

  return (
    <div className="DiaryItem">
      <span className="info">작성자: {author} | 감정점수: {emotion}</span>
      <br />
      <span className="date">{new Date(create_date).toLocaleString()}</span>
      <div className="content">{content}</div>
      <button onClick={() => handleRemove()}> 삭제하기</button>
      <button>수정하기</button>
    </div >
  )
}

export default DiaryItem;
