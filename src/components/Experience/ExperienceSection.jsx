import './ExperienceSection.css';

export const ExperienceSection = () => {
  return (
    <section className="m-6 experience-section">
      <h2 className="experience-heading">Experience</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bottom-grid-container">
        <h3 className="visually-hidden">Experiences</h3>{' '}
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor md:col-span-2 lg:col-span-2 exp-grid-div">
          <h3 className="experience-sub-heading">IT-Högskolan</h3>
          <h4 className="exp-sub-heading">Javascript Development</h4>
          <p className="expercience-paragraph">
            I completed two years of Higher Vocational Education
            to become a JavaScript developer. I learned to build scalable and
            responsive full-stack web and mobile applications. I also gained
            expertise in agile methodologies, including Kanban and Scrum, and
            became proficient in version control using Git and GitHub.
          </p>
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor exp-grid-div">
          <h3 className="experience-sub-heading">Ploteye</h3>
          <h4 className="exp-sub-heading">Second Internship</h4>
          <p className="expercience-paragraph">
            In this startup enviroment I helped rebuild the Ploteye webapp to a
            cross-platform mobile application using React Native and Javascript.
            It included both front- and backend development.
          </p>
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor exp-grid-div">
          <h3 className="experience-sub-heading">Ploteye</h3>
          <h4 className="exp-sub-heading">First Internship</h4>
          <p className="expercience-paragraph">
            Initiated a project to create a web service that scraped portal
            websites for information. Then used automation to send customized
            emails generated with the help of ChatGPTs API to these companies.
          </p>
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor exp-grid-div">
          <h3 className="experience-sub-heading">Oriola Sweden AB</h3>
          <h4 className="exp-sub-heading">Teamleader</h4>
          <p className="expercience-paragraph">
            Responsible for leading department processes, staff allocation and
            daily briefings. Conducted daily team meetings and provided
            constructive feedback for continuous improvement, and more.
          </p>
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor exp-grid-div">
          <h3 className="experience-sub-heading">Oriola Sweden AB</h3>
          <h4 className="exp-sub-heading">Warehouse Worker</h4>
          <p className="expercience-paragraph">
            Worked with incoming deliveries, forklift driving and order picking.
            I also acted as a mentor for over 30 collegues, teaching them how to
            do the work.
          </p>
        </div>
        {/*     <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor">
          <h3 className="experience-sub-heading">Highschool</h3>
          <h4 className="exp-sub-heading">
            Business and Administration Program
          </h4>
          <p className="expercience-paragraph"></p>
        </div> */}
      </section>
    </section>
  );
};
