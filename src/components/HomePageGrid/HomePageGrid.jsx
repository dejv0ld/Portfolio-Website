/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './HomePageGridStyle.css';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const HomePageGrid = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const strings = [
    'Fullstack Developer.',
    'Software Developer.',
    'App Developer.'
  ];

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
            src="/images/profilbild1.jpg"
            alt="Profile picture of David Johnson"
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
            src="/images/coding.jpg"
            alt="binary code, ones and zeros"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bottom-grid-container">
        <h2 className="visually-hidden">Projects</h2>{' '}
        {/* Add a hidden heading for accessibility */}
        <div className="bg-darkgray p-4 md:h-96 h-auto rounded-lg border border-gridBorderColor grid-div custom-card">
          <div className="img-box">
            <img
              src="/images/RepTracker_main2.svg"
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
            <Link to="/reptracker" className="read-more-link">
              Read More
            </Link>
          </div>
        </div>
        <div className="bg-darkgray p-4 md:h-96 h-auto rounded-lg border border-gridBorderColor grid-div custom-card">
          <div className="img-box">
            <img
              className="ploteye-img"
              src="/images/Ploteye_main.png"
              alt="profile picture of david"
            ></img>
          </div>
          <div className="custom-content">
            <h2>PlotEye</h2>
            <p>
              On my internship, I helped rebuild the ploteye webapp as a mobile
              application. Also helped starting up a new project for a
              webservice automation tool that did webscraping.
            </p>
            <Link to="/ploteyescreen" className="read-more-link">
              Read More
            </Link>
          </div>
        </div>
        <div className="bg-darkgray p-4 md:h-96 h-auto rounded-lg border border-gridBorderColor grid-div custom-card">
          <div className="img-box">
            <img
              src={
                windowWidth <= 480
                  ? '/images/Webshop_main_small.png'
                  : '/images/webshop_main.png'
              }
              alt="profile picture of david"
            ></img>
          </div>
          <div className="custom-content">
            <h2>Webshop</h2>
            <p>
              As a school assignment, me and some classmates built a fun mockup
              webshop project where the user needed to finish a small quiz to
              get access to the space-travel webshop.
            </p>
            <Link to="/webshopscreen" className="read-more-link">
              Read More
            </Link>
          </div>
        </div>
        <div className="bg-darkgray p-4 md:h-96 h-auto rounded-lg border border-gridBorderColor grid-div custom-card">
          <div className="img-box">
            <img
              src={
                windowWidth <= 480
                  ? '/images/Portfolio_main_small.png'
                  : '/images/Portfolio_main.png'
              }
              alt="profile picture of david"
            ></img>
          </div>
          <div className="custom-content">
            <h2>Portfolio Website</h2>
            <p>
              I built this portfolio website using React and Tailwind CSS. It is
              a responsive website that showcases my skills and projects.
            </p>
            <Link to="/portfolioinfoscreen" className="read-more-link">
              Read More
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};
