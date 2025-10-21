import React from "react";

function About() {
  const image = "https://i.imgur.com/mV8PQxj.gif";

  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I made this</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
