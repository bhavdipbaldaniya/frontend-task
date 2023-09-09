import React from "react";
import bannerimage from "../Images/hero-beer-bottles-3.png"

const Introduction = () => {
  return (
    <>
      <section className="container" id="container">
        <div className="heroSection" id="hero-section">
          <div className="bannerHeading" id="banner-heading">
            <h3>Biergut Premium Beer</h3>
            <h1>Introducing</h1>
            <h1> New Premium</h1>
            <h1>Flavors</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco.</p>
            <div className="button-banner" id="button-banner">
              <button className="intro-btn btn-primery" style={{background:'#312f2b',color: '#fff'}}>Host a Party</button>
              <button className="intro-btn btn-secondry" style={{background:'#fff',color: '#312f2b'}}>Restock Your Pub</button>
            </div>
          </div>
          <div className="bannerImg">
            <img src={bannerimage} alt="" />
          </div>
        </div>
      </section></>
  )
}
export default Introduction;
