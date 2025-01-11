import style from './Modal.module.css'

function Modal({children}) {
  return <>
    <div className={style.backdrop}/>
    <dialog open className={style.modal}>{children}</dialog>
  </>
}

export default Modal
