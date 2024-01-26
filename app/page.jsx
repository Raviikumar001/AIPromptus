"use client"
import React, { useState } from 'react';
import Popup from '@components/Notification';
import Feed from '@components/Feed';

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md: hidden" />
          <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>

        <p className="desc text-center">
          Promptus is an open-source prompting tool for the modern world to discover, create, and share creative prompts
        </p>      

        {/* Feed */}
        <Feed />

        {/* Popup */}
        {isPopupOpen && <Popup onClose={closePopup} />}
      </section>
    </>
  );
};

export default Home;














