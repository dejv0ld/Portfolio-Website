import './ExperienceSection.css';

export const ExperienceSection = () => {
  return (
    <section className="m-6 experience-section">
      <h2 className="experience-heading">Experience</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bottom-grid-container">
        <h3 className="visually-hidden">Experiences</h3>{' '}
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor grid-div custom-card">
          <h3 className="experience-sub-heading">Graduated IT-Högskolan</h3>
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor grid-div custom-card">
          <h3 className="experience-sub-heading">
            Ploteye - Second Internship
          </h3>
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor grid-div custom-card">
          <h3 className="experience-sub-heading">Ploteye - First Internship</h3>
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor grid-div custom-card">
          <h3 className="experience-sub-heading">
            Teamleader - Oriola Sweden AB
          </h3>
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor grid-div custom-card">
          <h3 className="experience-sub-heading">
            Warehouse worker - Oriola Sweden AB
          </h3>
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor grid-div custom-card">
          <h3 className="experience-sub-heading">
            Business and Administration Program - Highschool
          </h3>
        </div>
      </section>
    </section>
  );
};
