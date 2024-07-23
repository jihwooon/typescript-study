import styled from "styled-components";
import Button from "../common/Button";

const CATEGORY = [
  {
    id: null,
    name: "전체",
  },
  {
    id: 0,
    name: "동화",
  },
  {
    id: 1,
    name: "소설",
  },
  {
    id: 2,
    name: "사회",
  },
];

const BooksFilter = () => {
  return (
    <BooksFilterStyle>
      <div className="category">
        {CATEGORY.map((item) => (
          <Button size="medium" scheme="normal" key={item.id}>
            {item.name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button size="medium" scheme="normal">
          신간
        </Button>
      </div>
    </BooksFilterStyle>
  );
};

const BooksFilterStyle = styled.div`
  display: flex;
  gap: 24px;

  .category {
    display: flex;
    gap: 8px;
  }
`;

export default BooksFilter;
