/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './HomePageGridStyle.css';

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
    <div className="m-4">
      <div className="flex flex-col md:flex-row gap-4 mb-4 mt-4">
        <div className="bg-darkgray p-6 h-96 rounded-lg border border-gridBorderColor md:w-1/4 lg:w-1/4 flex-div1">
          {' '}
          <img className='profile-image'
            src=".\src\assets\images\Namnlös design (2).jpg"
            alt="binary code, ones and zeros"
          />
          <p>David</p>
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
            <h2 className="contact-heading">Contact Me</h2>
            <button className="contact-button">Click Here</button>
          </div>
          <img
            className="coding-image"
            src=".\src\assets\images\coding.jpg"
            alt="binary code, ones and zeros"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor grid-div">
          4
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor grid-div">
          5
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor grid-div">
          6
        </div>
        <div className="bg-darkgray p-4 h-96 rounded-lg border border-gridBorderColor">
          7
        </div>
      </div>
    </div>
  );
};
