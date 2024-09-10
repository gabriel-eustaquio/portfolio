import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import { ThemeContextProvider } from "./components/theme/ThemeProvider"
import About from "./pages/about/About"
import Techs from "./pages/techs/Techs"
import Contact from "./pages/contact/Contact"

function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/techs" element={<Techs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
