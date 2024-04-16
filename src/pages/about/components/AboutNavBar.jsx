import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarList from '../../../components/NavBarList';
import Button from '../../../components/Button';
import ButtonLight from '../../../components/ButtonLight';

export default function HomeNavBar() {
  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };
  const goSignup = () => {
    navigate("/signup");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Lalakid</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <NavBarList /> */}

        </div>
        <Button name="Sign up" type="button" onClick={goSignup} />
        <div style={{ width: 8 }}></div>
        <ButtonLight name="Log in" type="button" onClick={goLogin} />
      </div>
    </nav>
  );
}
