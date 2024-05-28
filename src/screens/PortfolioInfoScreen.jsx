import { Navbar } from '../components/Navbar';

export const PortfolioInfoScreen = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-xl mx-auto items-center">
        <section className="m-6">
          <h1 className="text-4xl sm:text-5xl mb-8 font-bold text-white text-left">
            Portfolio
          </h1>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bottom-grid-container">
            <h2 className="visually-hidden">Ploteye</h2>{' '}
            {/* Add a hidden heading for accessibility */}
            <div className="bg-darkgray p-4 sm:h-98 h-auto rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              <p className="text-light-gray sm:text-lg text-left mt-4">
                The objective of my portfolio website is to create a
                comprehensive digital resume that showcases my skills, projects,
                and professional experience. It is designed to highlight my
                frontend capabilities as a JavaScript developer and to provide a
                platform for potential employers and clients to learn more about
                me. <br></br>
                <br></br>This portfolio serves as an essential tool for
                presenting my work and professional identity. The main goals
                were to design a visually appealing and user-friendly website
                that clearly communicates my skills and accomplishments.
              </p>
            </div>
            <div className="bg-darkgray p-4 h-98 rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/images/Portfolio_sub.png"
                alt="profile picture of david"
              />
            </div>
            <div className="bg-darkgray p-4 sm:h-98 h-auto rounded-lg border border-gridBorderColor  hover:bg-custom-gray">
              <div>
                <div className="flex flex-1 gap-4 flex-wrap">
                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">React</p>
                  </div>
                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">Javascript</p>
                  </div>

                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">Tailwindcss</p>
                  </div>
                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">CSS</p>
                  </div>
                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">Vite</p>
                  </div>
                </div>
                <p className="text-light-gray sm:text-lg text-left mt-4">
                  I built my portfolio using React for creating dynamic and
                  responsive user interfaces, and JavaScript to add interactive
                  functionality. TailwindCSS, combined with CSS, ensures that
                  the styling is efficient, consistent, and responsive across
                  different devices. Vite is used for its fast development and
                  build speeds, providing a smooth and efficient workflow.
                </p>
              </div>
            </div>
            <div className="bg-darkgray p-4 h-98 rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              {' '}
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/images/Portfolio_sub2.png"
                alt="profile picture of david"
              />
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};
