import { Navbar } from '../components/Navbar.jsx';
import { HomePageGrid } from '../components/HomePageGrid/HomePageGrid.jsx';
import { Skills } from '../components/SkillsComponent/Skills.jsx';
import { HeadingComponent } from '../components/HeadingComponent.jsx';
import { AboutSection } from '../components/AboutSection/AboutSection.jsx';
import { Footer } from '../components/Footer/Footer.jsx';
import { ExperienceSection } from '../components/Experience/ExperienceSection.jsx';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeadingComponent />
      <main
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >

          <HomePageGrid />
        
        <section id="about">
          <AboutSection />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <Footer />
      </main>
    </div>
  );
};
