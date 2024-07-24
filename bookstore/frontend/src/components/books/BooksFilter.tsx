import styled from "styled-components";
import Button from "../common/Button";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategory = (id: number | null) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (id === null) {
      newSearchParams.delete("category_id");
    } else {
      newSearchParams.set("category_id", id.toString());
    }

    setSearchParams(newSearchParams);
  };

  const currentCategory = searchParams.get("category_id");

  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.get("news")) {
      newSearchParams.delete("news");
    } else {
      newSearchParams.set("news", "true");
    }
  };

  return (
    <BooksFilterStyle>
      <div className="category">
        {CATEGORY.map((item) => (
          <Button
            size="medium"
            scheme={
              currentCategory === item.id?.toString() ? "primary" : "normal"
            }
            key={item.id}
            onClick={() => handleCategory(item.id)}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button
          size="medium"
          scheme={searchParams.get("news") ? "primary" : "normal"}
          onClick={() => handleNews()}
        >
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
