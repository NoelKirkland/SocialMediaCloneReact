import React from 'react';
import HomeButton from './HomeButton';
import ButtonTrio from './ButtonTrio';
import SearchForm from './SearchForm';

function Navbar() {
  return(
    <nav className ="navbar navbar-inverse">
      <HomeButton />
      <ButtonTrio />
      <SearchForm />
    </nav>
  );
}

export default Navbar;