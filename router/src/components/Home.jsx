import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom'

export default function Home() {
  //this id send to the about page as data pass through useNavigate Hook
  const id = 5;
  const navigate = useNavigate();
  //function for navigate about page
  function goToAbout() {
    //path of our page where we want to go and a part of state which send data to another component about
    //using the hook of useNavigate
    navigate("/about", { state: { id: id } });
  }
  // function for navigate contact page
  function goToContact() {
    navigate("/contact");
  }
  return (
    <>
      <div>hi i am Home page</div>
      {/* <Link to="/about">About</Link><br/>
    <Link to="/contact">Contact</Link> */}
      <button onClick={goToAbout}>About</button>
      <br />
      <button onClick={goToContact}>Contact</button>
    </>
  );
}
