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
      <main className='max-w-screen-xl mx-auto items-center'>
        <section className="m-6">
          <h1 className='text-white text-5xl pb-4'>RepTracker</h1>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bottom-grid-container">
            <h2 className="visually-hidden">Projects</h2>{' '}
            {/* Add a hidden heading for accessibility */}
            <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor hover:bg-custom-gray"></div>
            <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              <img className='w-full h-full object-cover rounded-lg'
                src=".\src\assets\images\RepTracker_sub.png"
                alt="profile picture of david"
              ></img>
            </div>
            <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor md:col-span-2 lg:col-span-2 hover:bg-custom-gray"></div>
          </section>
        </section>
      </main>
    </div>
  );
};
