import style from './post.module.css';

function Post({author, body}) {
  return (
    <div className={style.container}>
      <p className={style.author}>{author}</p>
      <p className={style.body}>{body}</p>
    </div>
  )
}

export default Post;

