import Home from "./pages/common/Home"
import Layout from "./pages/layout/Layout"
import { BookStoreThemeProvider } from "./context/themeContext"
import ThemeSwitcher from "./pages/header/ThemeSwitcher"

function App() {
  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher />
      <Layout>
        <Home/>
      </Layout>
    </BookStoreThemeProvider>
  )
}

export default App
