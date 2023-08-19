import React from "react";
import { useLocation } from "react-router-dom";
// import { Link } from 'react-router-dom'

export default function About() {
  //acces data which i have send through useNavigate hook from home component
  //useLocation is used to accept data from another sender component data
  const location = useLocation();
  // console.log(location.state)

  return (
    <>
      <h1>hi i am about page and my id is{location.state.id}</h1>
      {/* <Link to="contact">Contact</Link><br/>
    <Link to="/">Home</Link> */}
    </>
  );
}
