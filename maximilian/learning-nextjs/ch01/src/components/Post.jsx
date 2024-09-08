import style from './post.module.css';

function Post(props) {
  return (
    <div className={style.container}>
      <p className={style.author}>{props.author}</p>
      <p className={style.body}>{props.body}</p>
    </div>
  )
}

export default Post;

