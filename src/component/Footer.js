import React from "react";
import musicImg from '../Images/Link.png'
const Footeer = () => {
  return (
    <>
      <section className="video-section" id="video-section">
        <h2>Discover The<br />
          Brewing Process</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.</p>
        <img src={musicImg} alt="" />
      </section>
      <section className="last-section" id="last-section">
        <div className="last-heading" id="last-heading">
          <h3>Hosting A<br />
            Party?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className="btn-last-section">Get Biergut</button>
        </div>
        <div className="last-headingtwo" id="last-headingtwo">
          <h3>Own a Pub or<br />
            Bar?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className="btn-last-section-two">Contact For Stocking</button>
        </div>
      </section>
    </>
  )
}

export default Footeer;
