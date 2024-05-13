/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './HomePageGridStyle.css';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

export const HomePageGrid = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const strings = ['Fullstack Developer.', 'Web Developer.', 'App Developer.'];

  useEffect(() => {
    const currentString = strings[stringIndex];
    let delay = isDeleting ? 100 : 150; // Adjust the typing and deleting speeds here

    if (!isDeleting && charIndex === currentString.length) {
      setTimeout(() => {
        setIsDeleting(true);
      }, 1500); // Delay before starting to delete
      return;
    }

    if (isDeleting && charIndex === 0) {
      setTimeout(() => {
        setDisplayText(''); // Clear the display text before moving on to the next string
        setIsDeleting(false);
        setStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
      }, 1000); // Delay before starting new string
      return;
    }

    const nextCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
    setTimeout(() => {
      setCharIndex(nextCharIndex);
      setDisplayText(currentString.slice(0, nextCharIndex));
    }, delay);
  }, [charIndex, isDeleting, stringIndex, strings]);

  return (
    <section className="m-6">
            <h1 className="visually-hidden">Home Page</h1>

      <section className="flex flex-col md:flex-row gap-4 mb-4 mt-4">
        <div className="bg-darkgray p-6 h-96 rounded-2xl border border-gridBorderColor md:w-1/4 lg:w-1/4 flex-div1">
          {' '}
          <img
            className="profile-image"
            src=".\src\assets\images\Namnlös design (2).jpg"
            alt="Profile picture of DAvid Johnson"
          />
          <h2 className="p-3 text-white">David</h2>
          <div className="flex gap-4 flex-grow-1 justify-center">
            <BsLinkedin className="icon" size={30} color="white" />
            <BiLogoGmail
              className="icon"
              size={30}
              color="white"
              onClick={() => {
                window.location.href = 'mailto:david_johnson_1992@hotmail.com';
              }}
            />
            {/*Navigate to github page*/}
            <FaGithub
              className="icon"
              size={30}
              color="white"
              onClick={() => {
                window.open('https://github.com/dejv0ld', '_blank');
              }}
            />
          </div>
        </div>
        <div className="bg-darkgray p-4 h-24 md:h-96 lg:h-96 rounded-lg border border-gridBorderColor md:w-1/3 lg:w-1/3 typewriter-div">
          <h1>
            <span
              className="typewriter"
              dangerouslySetInnerHTML={{ __html: displayText }}
            ></span>
          </h1>
        </div>
        <div className="bg-darkgray  h-48 md:h-96 lg:h-96 rounded-lg border border-gridBorderColor md:w-5/12 lg:w-5/12 grid-div1">
          <div className="content-container">
            <button
              className="contact-button"
              onClick={() => {
                window.location.href = 'mailto:david_johnson_1992@hotmail.com';
              }}
            >
              Contact
            </button>
          </div>
          <img
            className="coding-image"
            src=".\src\assets\images\coding.jpg"
            alt="binary code, ones and zeros"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bottom-grid-container">
      <h2 className="visually-hidden">Projects</h2> {/* Add a hidden heading for accessibility */}

        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor grid-div custom-card">
          <div className="img-box">
            <img
              src=".\src\assets\images\Namnlös design (2).jpg"
              alt="profile picture of david"
            ></img>
          </div>
          <div className="custom-content">
            <h2>Portfolio Website</h2>
            <p>
              I built this portfolio website using React and Tailwind CSS. It is
              a responsive website that showcases my skills and projects.
            </p>
            <a href="">Read More</a>
          </div>
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor grid-div custom-card">
          <div className="img-box">
            <img
              src=".\src\assets\images\Namnlös design (2).jpg"
              alt="profile picture of david"
            ></img>
          </div>
          <div className="custom-content">
            <h2>RepTracker</h2>
            <p>
              Cross-platform mobile application built using React Native,
              TypeScript and Redux Toolkit. It allows users to log their
              workouts and track their progress using graphs.
            </p>
            <a href="">Read More</a>
          </div>
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor grid-div custom-card">
          <div className="img-box">
            <img
              src=".\src\assets\images\Namnlös design (2).jpg"
              alt="profile picture of david"
            ></img>
          </div>
          <div className="custom-content">
            <h2>PlotEye</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              magnam perferendis quibusdam soluta totam odio sit! Ipsa iure
              voluptate neque placeat ab ad quae.
            </p>
            <a href="">Read More</a>
          </div>
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor grid-div custom-card">
          <div className="img-box">
            <img
              src=".\src\assets\images\Namnlös design (2).jpg"
              alt="profile picture of david"
            ></img>
          </div>
          <div className="custom-content">
            <h2>Card 1</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              magnam perferendis quibusdam soluta totam odio sit! Ipsa iure
              voluptate neque placeat ab ad quae.
            </p>
            <a href="">Read More</a>
          </div>
        </div>
      </section>
    </section>
  );
};
