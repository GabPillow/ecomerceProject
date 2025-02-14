import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Header from './Header'
import GameShow from './pages/GameShow/GameShow';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game/:id" element={<GameShow />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
