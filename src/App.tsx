import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import Exec from './Pages/exec'
import Sponsor from './Pages/sponsor'

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/exec" element={<Exec />}/>
          <Route path="/sponsor" element={<Sponsor />}/>
        </Routes>
      </Router>
    )
}

export default App
 