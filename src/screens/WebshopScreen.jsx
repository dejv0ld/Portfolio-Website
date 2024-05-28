import { Navbar } from '../components/Navbar';

export const WebshopScreen = () => {
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-xl mx-auto items-center">
        <section className="m-6">
          <h1 className="text-4xl sm:text-5xl mb-8 font-bold text-white text-left">
            Webshop
          </h1>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bottom-grid-container">
            <h2 className="visually-hidden">Ploteye</h2>{' '}
            {/* Add a hidden heading for accessibility */}
            <div className="bg-darkgray p-4 sm:h-96 h-auto rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              <p className="text-light-gray sm:text-lg text-left mt-4">
                Me and some classmates created this mockup space travel webshop
                as a fun project. To access the website, users first need to
                complete a quiz. Once inside, they can add tickets to their cart
                and proceed to checkout. <br></br>
                <br></br>The idea behind this project was to build something
                enjoyable while also experimenting with developing a fully
                functional webshop.
              </p>
            </div>
            <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="./src/assets/images/webshop_sub.png"
                alt="profile picture of david"
              />
            </div>
            <div className="bg-darkgray p-4 sm:h-96 h-auto rounded-lg border border-gridBorderColor  hover:bg-custom-gray">
              <div>
                <div className="flex flex-1 gap-4 flex-wrap">
                  <div
                    style={{ border: '0.5px solid #adadad' }}
                    className="rounded-lg pt-2 pb-2 pr-3 pl-3"
                  >
                    <p className="text-light-gray">Vue.js</p>
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
                  We developed this webshop using Vue.js with Vite, JavaScript,
                  and TailwindCSS. This project served as a valuable learning
                  experience for us, enhancing our skills in agile development
                  and teamwork. We managed our codebase with GitHub and held
                  daily standups to monitor our progress effectively.
                </p>
              </div>
            </div>
            <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor hover:bg-custom-gray">
              {' '}
              <img
                className="w-full h-full object-cover rounded-lg"
                src="./src/assets/images/webshop_sub2.png"
                alt="profile picture of david"
              />
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};
