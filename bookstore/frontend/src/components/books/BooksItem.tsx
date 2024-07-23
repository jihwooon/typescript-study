import styled from "styled-components";
import { Book } from "../../models/book.model";
import { getImgSrc } from "../../utils/images";
import { foramtNumber } from "../../utils/format";
import { FaHeart } from "react-icons/fa";

interface Props {
  book: Book;
}

const BooksItem = ({ book }: Props) => {
  return (
    <BooksItemStyle>
      <div className="img">
        <img src={getImgSrc(book.img)} alt={book.title} />
      </div>
      <div className="content">
        <h2 className="title">{book.title}</h2>
        <p className="summary">{book.summary}</p>
        <p className="author">{book.author}</p>
        <p className="price">{foramtNumber(book.price)}원</p>
        <div className="likes">
          <FaHeart />
          <span>{book.likes}</span>
        </div>
      </div>
    </BooksItemStyle>
  );
};

const BooksItemStyle = styled.div``;

export default BooksItem;
