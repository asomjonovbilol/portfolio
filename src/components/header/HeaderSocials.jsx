import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/bilol-asomjonov-9471422a5/com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/asomjonovbilol" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials