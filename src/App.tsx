import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import Events from './Pages/events'
import About from './Pages/about'
import Sponsor from './Pages/sponsor'
import FAQ from './Pages/faq'
import JoinSase from './Pages/joinsase'
import Exec from './Pages/exec'
import Merch from './Pages/merch'

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/sponsor" element={<Sponsor />}/>
          <Route path="/faq" element={<FAQ />}/>
          <Route path="/joinsase" element={<JoinSase />}/>
          <Route path="/exec" element={<Exec />}/>
          <Route path="/merch" element={<Merch />}/>
        </Routes>
      </Router>
    )
}

export default App
 