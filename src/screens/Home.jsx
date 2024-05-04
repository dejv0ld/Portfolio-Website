import { Navbar } from '../components/Navbar.jsx';
import { HomePageGrid } from '../components/HomePageGrid.jsx';
import { Skills } from '../components/SkillsComponent/Skills.jsx';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HomePageGrid />
        <Skills />
      </main>
    </div>
  );
};
