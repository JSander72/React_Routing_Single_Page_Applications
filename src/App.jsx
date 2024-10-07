import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Comics from './components/Comics';
import BrowseCharacters from './components/BrowseCharacters';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </Router>
      <div className='App'>
        <BrowseCharacters />
      </div>
    </>
  );
}

export default App;