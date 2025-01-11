import {useContext} from "react";
import {ThemeContext} from "../../context/themeContext";
import {FaSun} from "react-icons/fa";

function ThemeSwitcher() {
    const {themeName, toggleTheme} = useContext(ThemeContext)

    return <button onClick={toggleTheme}><FaSun/></button>
}

export default ThemeSwitcher;
