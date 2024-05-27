import { Navbar } from '../components/Navbar';

export const PlotEyeScreen = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-xl mx-auto items-center">
        <section className="m-6">
          <h1 className="text-4xl sm:text-5xl mb-8 font-bold text-white text-left">Ploteye</h1>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bottom-grid-container">
            <h2 className="visually-hidden">Ploteye</h2>{' '}
            {/* Add a hidden heading for accessibility */}
            <div className="bg-darkgray p-4 sm:h-98 h-auto rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              <p className="text-light-gray sm:text-lg text-left mt-4">
                This was an internship project where we collaborated as a team
                to transform the existing PlotEye web application into a mobile
                application. The goal of PlotEye is to provide a comprehensive
                solution for individuals to buy and sell properties without
                intermediaries. <br></br><br></br>Users can select a plot from the map and click
                on it to view detailed information, including images and
                descriptions. They can also place bids directly through the app.
                Additionally, users have the capability to list their own plots
                for sale. The app aims to simplify the real
                estate process, making it more accessible and user-friendly for
                everyone involved.
              </p>
            </div>
            <div className="bg-darkgray p-4 h-98 rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              <img
                className="w-full h-full object-cover rounded-lg"
                src=".\src\assets\images\ploteye2.svg"
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
                    <p className="text-light-gray">React Native</p>
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
                    <p className="text-light-gray">Redux</p>
                  </div>
                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">Express</p>
                  </div>
                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">MongoDb</p>
                  </div>
                </div>
                <p className="text-light-gray sm:text-lg text-left mt-4">
                  Utilized React Native for cross-platform development and
                  JavaScript for building interactive user interfaces. Employed
                  Redux for efficient state management and data fetching.<br></br><br></br> For
                  the backend, Express was used for building the server-side
                  logic and MongoDB for its scalable and flexible database
                  solutions.
                </p>
              </div>
            </div>
            <div className="bg-darkgray p-4 h-98 rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              {' '}
              <img
                className="w-full h-full object-cover rounded-lg"
                src=".\src\assets\images\ploteye1 (1).svg"
                alt="profile picture of david"
              />
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};
/* md:col-span-2 lg:col-span-2 */
