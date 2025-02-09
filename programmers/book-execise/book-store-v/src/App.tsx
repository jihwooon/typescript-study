import Home from "./pages/common/Home"
import Layout from "./pages/layout/Layout"
import { GlobalStyle } from "./style/global"
import { ThemeProvider } from "styled-components"
import { light } from "./style/theme"

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle themeName="light" />
      <Layout>
        <Home/>
      </Layout>
    </ThemeProvider>
  )
}

export default App
