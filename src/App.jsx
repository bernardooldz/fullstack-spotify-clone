import Header from "./components/Header"
import Artist from "./Pages/Artist"
import Artists from "./Pages/Artists"
import Home from "./Pages/Home"
import Songs from "./Pages/Songs"
import Song from "./Pages/Song"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/artists" element={ <Artists /> } />
        <Route path="/artist/:id" element={ <Artist /> } />
        <Route path="/songs" element={ <Songs /> } />
        <Route path="/song/:id" element={ <Song /> } />
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
