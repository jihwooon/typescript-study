import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import styled from "styled-components";

interface Props {
  chidren: React.ReactNode;
}

const ThemeSwitcher = ({ chidren }: Props) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <ThemSwitcherStyle>
      <button className="button" onClick={toggleTheme}>
        {chidren}
      </button>
    </ThemSwitcherStyle>
  );
};

const ThemSwitcherStyle = styled.button`
  .button {
    height: 10px;

    svg {
      height: 20px;
    }
  }
`;

export default ThemeSwitcher;
