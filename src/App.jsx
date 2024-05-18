import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './App.css';
import { Home } from './screens/Home' // Import the HomePageGrid component
import { RepTracker } from './screens/RepTracker'; // Import the RepTracker component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reptracker" element={<RepTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
