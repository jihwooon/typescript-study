import Post from './Post.jsx';
import style from './PostList.module.css'
import NewPost from './NewPost.jsx';
import { useState } from 'react';
import Modal from './Modal.jsx';

function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("")

  function changeBodyHandler (event) {
    const enteredBody = event.target.value
    setEnteredBody(enteredBody)
  }

  function authorChangeHandler(event) {
    const enteredAuthor = event.target.value
    setEnteredAuthor(enteredAuthor)
  }

  return (
    <>
      <Modal>
        <NewPost onBodyChange={changeBodyHandler} onAuthorChange={authorChangeHandler}/>
      </Modal>
      <ul className={style.posts}>
        <Post author={enteredAuthor} body={enteredBody}/>
      </ul>
    </>
  )
}

export default PostList;
