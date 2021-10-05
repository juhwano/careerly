import React from 'react';
import NavbarComponent from '../../../components/common/navbar/NavbarComponent';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

function NavbarContainers({ isLoggined }) {
  return <NavbarComponent isLoggined={isLoggined} />;
}

export default NavbarContainers;
