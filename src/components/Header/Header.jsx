import React from 'react';
import { ReactNavbar } from 'overlay-navbar'; // Ensure named import
import logo from '../../images/logo.png';
import { FaUserAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      navColor2="hsl(219,48%,8%)"
      burgerColor="#38b6ff"
      burgerColorHover="hsl(250, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="About"
      link2Text="Projects"
      link3Text="Skills"
      link4Text="Contact"
      link1Url="/about"
      link2Url="/projects"
      link3Url="/skills"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="#38b6ff"
      link1Size="1.5rem"
      link1Padding="3vmax"
      logo={logo}
      logoWidth="150px"
      logoHoverColor="hsl(250, 100%, 75%)"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="#38b6ff"
      profileIconColorHover="white"
    />
  );
};

export default Header;
