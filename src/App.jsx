import Header from "./components/Header"
import Main from "./components/MainSection"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  )
}

export default App
