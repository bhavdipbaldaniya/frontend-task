import React from "react";
import bannerimage5 from "../Images/beer-features-1.png"
import seedIcon from "../Images/Figure_iconfinder_Seed.png"
import treeIcon from "../Images/Figure_icon.png"
import mugIcon from "../Images/Figure_icon_2.png"
import f1 from "../Images/feature-1.png"
import f2 from "../Images/feature-2.png"
import f3 from "../Images/feature-3.png"

import chooseFlavorImg from "../Images/choose-flavor.png"


const Features = () => {
  return (
    <>
      <section>
        <div className="section-5">
          <div className="title">
            <h2>Features & Ingredients</h2>
            <p>Curabitur arcu erat, accumsan id imperdiet et, port titor at sem. Donec sollici tudin molestie malesuada.</p>
          </div>
          <div className="details">
            <div className="img">
              <img src={bannerimage5} alt="" />
            </div>
            <div className="feature-detail">
              <div className="part02">
                <img src={mugIcon} alt="" />
                <p>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                  dui. Proin eget tortor risus. Nulla quis lorem ut libero malesuada
                  feugiat. Mauris blandit aliquet elit.
                </p>
              </div>
              <div className="part03">
                <img src={treeIcon} alt="" />

                <p>
                  Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum
                  id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula
                  elementum sed sit amet dui.
                </p>
              </div>
              <div className="part04">
                <img src={seedIcon} alt="" />
                <p>
                  Donec sollicitudin molestie malesuada. Donec sollicitudin molestie
                  malesuada. Nulla quis lorem ut libero malesuada feugiat. Vivamus
                  suscipit tortor eget felis porttitor volutpat.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-disc">
            <div className="part02">
              <img src={f3} alt="" />
              <p>
                Vestibulum ac diam sit amet quam vehicula elementum.
              </p>
            </div>
            <div className="part03">
              <img src={f2} alt="" />

              <p>
                Vestibulum ac diam sit
                amet quam vehicula
                elementum .
              </p>
            </div>
            <div className="part04">
              <img src={f1} alt="" />
              <p>
                Vestibulum ac diam sit
                amet quam vehicula
                elementum .
              </p>
            </div>
          </div>
          <div className="details">
            <div className="img">
              <img src={chooseFlavorImg} alt="" />
            </div>
            <div className="flavour-detail">
              <div className="title" style={{ margin: '0px', width: 'auto' }}>
                <h2 style={{ textAlign: 'left' }}>Choose Your
                  Flavour</h2>
              </div>
              <p><b>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo
                eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</b></p> <br />
              <p>Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Cras
                ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta.
                Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Nulla
                quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis porttitor
                volutpat.</p>
              <button className="btn-last-section" style={{ width: 'auto', height: 'auto', padding: '0.5em 2em', marginLeft: '0px' }}>Choose For Yourself</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Features;
