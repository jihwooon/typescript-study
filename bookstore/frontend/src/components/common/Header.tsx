import { styled } from "styled-components";
import logo from "../../assert/images/logo.png";
import { FaRegUser, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

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

const Header = () => {
  const { isLoggedIn, storeLogout } = useAuthStore();

  return (
    <HeaderStyle>
      <h1 className="logo">
        <img src={logo} alt="book store" />
      </h1>
      <nav className="category">
        <ul>
          {CATEGORY.map((item) => (
            <li key={item.id}>
              <Link
                to={
                  item.id === null ? "/books" : `/books?category_id=${item.id}`
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="auth">
        {isLoggedIn && (
          <ul>
            <li>
              <Link to="/cart">장바구니</Link>
            </li>
            <li>
              <button onClick={storeLogout}>로그 아웃</button>
            </li>
          </ul>
        )}
        {!isLoggedIn && (
          <ul>
            <li>
              <Link to="/login">
                <FaSignInAlt />
                로그인
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <FaRegUser />
                회원가입
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  .logo {
    img {
      width: 200px;
    }
  }

  .category {
    ul {
      display: flex;
      gap: 32px;
      li {
        a {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 16px;
      li {
        a,
        button {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          line-height: 1;
          color: ${({ theme }) => theme.color.text};
          border: 0;
          background: none;
          cursor: pointer;

          svg {
            margin-right: 6px;
          }
        }
      }
    }
  }
`;

export default Header;
