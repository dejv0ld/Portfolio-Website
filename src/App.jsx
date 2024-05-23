import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import './App.css';
import { Home } from './screens/Home'; // Import the HomePageGrid component
import { RepTracker } from './screens/RepTracker'; // Import the RepTracker component
import { PlotEyeScreen } from './screens/PlotEyeScreen'; // Import the PlotEyeScreen component
import { PortfolioInfoScreen } from './screens/PortfolioInfoScreen';
import { WebshopScreen } from './screens/WebshopScreen';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reptracker" element={<RepTracker />} />
          <Route path="/ploteyescreen" element={<PlotEyeScreen />} />
          <Route
            path="/portfolioinfoscreen"
            element={<PortfolioInfoScreen />}
          />
          <Route path="/webshopscreen" element={<WebshopScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
