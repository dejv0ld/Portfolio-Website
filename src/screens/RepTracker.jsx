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
          <h1 className="text-white text-5xl mt-10 mb-10 text-left">
            RepTracker
          </h1>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bottom-grid-container">
            <h2 className="visually-hidden">Projects</h2>{' '}
            {/* Add a hidden heading for accessibility */}
            <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor hover:bg-custom-gray"></div>
            <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              <img
                className="w-full h-full object-cover rounded-lg"
                src=".\src\assets\images\RepTracker_sub3.png"
                alt="profile picture of david"
              ></img>
            </div>

              <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor  hover:bg-custom-gray">
              <div className="flex flex-1 gap-4 flex-wrap">
                <div style={{ border: '0.5px solid #adadad'}} className="rounded-lg pt-2 pb-2 pr-3 pl-3">
                  <text className='text-light-gray'>React Native</text>
                </div>
                <div style={{ border: '0.5px solid #adadad'}} className="rounded-lg pt-2 pb-2 pr-3 pl-3">
                  <text className='text-light-gray'>TypeScript</text>
                </div>
                <div style={{ border: '0.5px solid #adadad'}} className="rounded-lg pt-2 pb-2 pr-3 pl-3">
                  <text className='text-light-gray'>Expo</text>
                </div>
                <div style={{ border: '0.5px solid #adadad'}} className="rounded-lg pt-2 pb-2 pr-3 pl-3">
                  <text className='text-light-gray'>Redux</text>
                </div>
                <div style={{ border: '0.5px solid #adadad'}} className="rounded-lg pt-2 pb-2 pr-3 pl-3">
                  <text className='text-light-gray'>RTK-Query</text>
                </div>
                <div style={{ border: '0.5px solid #adadad'}} className="rounded-lg pt-2 pb-2 pr-3 pl-3">
                  <text className='text-light-gray'>Firebase</text>
                </div>
              </div>
              <div></div>
            </div>
            <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor hover:bg-custom-gray">
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
