import { Navbar } from '../components/Navbar';
/*  import styled from 'styled-components';

const Main = styled.main`
max-width: 1280px;
margin: 0 auto;
align-items: center;
` */

export const RepTracker = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-xl mx-auto items-center">
        <section className="m-6">
          <h1 className="text-4xl sm:text-5xl mb-8 font-bold text-white text-left">
            RepTracker
          </h1>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bottom-grid-container">
            <h2 className="visually-hidden">RepTracker</h2>{' '}
            {/* Add a hidden heading for accessibility */}
            <div className="bg-darkgray p-4 sm:h-98 h-auto rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              <p className="text-light-gray sm:text-lg text-left">
                RepTracker is a streamlined fitness application designed to
                enhance your workout experience by meticulously logging your
                training sessions and visually tracking your progress through
                intuitive charts. <br></br>
                <br></br>Committed to simplicity and user-focused design,
                RepTracker features a minimalistic approach that ensures ease of
                use from the first interaction. The interface is clean and
                straightforward, enabling users to focus solely on their
                training without distractions.
              </p>
            </div>
            <div className="bg-darkgray p-4 h-98 rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              <img
                className="w-full h-full object-cover rounded-lg"
                src=".\src\assets\images\RepTracker_sub3.png"
                alt="profile picture of david"
              ></img>
            </div>
            <div className="bg-darkgray p-4 sm:h-98 h-auto rounded-lg border border-gridBorderColor  hover:bg-custom-gray">
              <div>
                <div className="flex flex-1 gap-4 flex-wrap">
                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">React Native</p>
                  </div>
                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">TypeScript</p>
                  </div>
                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">Expo</p>
                  </div>
                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">Redux</p>
                  </div>
                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">RTK-Query</p>
                  </div>
                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">Firebase</p>
                  </div>
                </div>
                <p className="text-light-gray sm:text-lg text-left mt-4">
                  Utilized React Native for cross-platform development and
                  TypeScript for type safety. Leveraged Expo for easy app
                  building and publishing, and Redux for state management and
                  data fetching. <br></br>
                  <br></br>For the database, I chose Firebase for its real-time
                  synchronization and offline capabilities, which are
                  well-suited for a mobile application.
                </p>
              </div>
            </div>
            <div className="bg-darkgray p-4 h-98 rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              <img
                className="w-full h-full object-cover rounded-lg"
                src=".\src\assets\images\RepTracker_sub4.png"
                alt="profile picture of david"
              ></img>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};
/* md:col-span-2 lg:col-span-2 */
