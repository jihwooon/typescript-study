import { styled } from 'styled-components';
import logo from '../../assert/images/logo.png';
import { FaAngleRight, FaBars, FaRegSun, FaRegUser, FaSignInAlt, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import Dropdown from './Dropdown';
import ThemeSwitcher from '../header/ThemeSwitcher';
import { useState } from 'react';

const CATEGORY = [
  {
    id: null,
    name: '전체',
  },
  {
    id: 0,
    name: '동화',
  },
  {
    id: 1,
    name: '소설',
  },
  {
    id: 2,
    name: '사회',
  },
];

const Header = () => {
  const { isLoggedIn = false, storeLogout } = useAuthStore();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <HeaderStyle $isOpen={isMobileOpen}>
      <h1 className="logo">
        <img src={logo} alt="book store" />
      </h1>
      <nav className="category">
        <button className="menu-button" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <FaBars /> : <FaAngleRight />}
        </button>

        <ul>
          {CATEGORY.map((item) => (
            <li key={item.id}>
              <Link to={item.id === null ? '/books' : `/books?category_id=${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="auth">
        <Dropdown toggleButton={<FaUserCircle />}>
          <>
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
            <ThemeSwitcher chidren={<FaRegSun />} />
          </>
        </Dropdown>
      </nav>
    </HeaderStyle>
  );
};

interface HeaderStyleProps {
  $isOpen: boolean;
}

const HeaderStyle = styled.header<HeaderStyleProps>`
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
    .menu-button {
      display: none;
    }

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
      width: 100px;

      li {
        a,
        button {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
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

  @media screen AND ${({ theme }) => theme.mediaQuery.mobile} {
    height: 52px;

    .logo {
      padding: 0 0 0 12px;

      img {
        width: 140px;
      }
    }

    .auth {
      position: absolute;
      top: 12px;
      right: 12px;
    }

    .category {
      position: absolute;
      top: 12px;
      right: 56px;

      .menu-button {
        display: flex;
        position: absolute;
        top: 12px;
        right: ${({ $isOpen }) => ($isOpen ? '62%' : '52px')};
        background: #fff;
        border: 0;
        font-size: 1.5rem;
      }

      ul {
        position: fixed;
        top: 0;
        right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
        width: 60%;
        height: 100vh;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        transition: right 0.3s ease-in-out;

        margin: 0;
        padding: 24px;
        z-index: 1000;

        flex-direction: column;
        gap: 16px;
      }
    }
  }
`;

export default Header;
