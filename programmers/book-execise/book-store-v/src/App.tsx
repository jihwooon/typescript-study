import Home from "./pages/common/Home"
import Layout from "./pages/layout/Layout"
import { GlobalStyle } from "./style/global"
import { ThemeProvider } from "styled-components"
import { getTheme } from "./style/theme"
import ThemeSwitcher from "./pages/header/ThemeSwitcher"
import { useContext } from "react"
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext"

function App() {
  const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    <BookStoreThemeProvider>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        <ThemeSwitcher themeName={themeName} setThemeName={setThemeName}/>
        <Layout>
          <Home/>
        </Layout>
      </ThemeProvider>
    </BookStoreThemeProvider>
  )
}

export default App
