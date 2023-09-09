import React from "react";
import bannerimage2 from "../Images/beer-light-1.png"
import bannerimage3 from "../Images/beer-dark-1.png"

const Introduction = () => {
    return (
        <>
            <section>
                <div className="pd section-3 ">
                    <div className="title">
                        <h2>Discover Our New Flavors</h2>
                        <p>Curabitur arcu erat, accumsan id imperdiet et, port titor at sem. Donec sollici tudin molestie malesuada.</p>
                    </div>
                    <div className="details">
                        <img src={bannerimage2} alt="" />
                        <div className="content">
                            <h5>Biergut</h5>
                            <h2>Premium Light</h2>
                            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.</p>
                            <div className="psTag">
                                <span>
                                    <h3>Extract</h3>
                                    <p>11%</p>
                                </span>
                                <span>
                                    <h3>Alcohol</h3>
                                    <p>4%</p>
                                </span>
                                <span>
                                    <h3>Gentain</h3>
                                    <p>20IBU</p>
                                </span>
                                <span>
                                    <h3>Serving Temp</h3>
                                    <p>6-9 Degree Celsius</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="pd section-4">
                    <div className="content">
                        <h5>Biergut</h5>
                        <h2>Premium Light</h2>
                        <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada.</p>
                        <div className="psTag">
                            <span>
                                <h3>Extract</h3>
                                <p>11%</p>
                            </span>
                            <span>
                                <h3>Alcohol</h3>
                                <p>4%</p>
                            </span>
                            <span>
                                <h3>Gentain</h3>
                                <p>20IBU</p>
                            </span>
                            <span>
                                <h3>Serving Temp</h3>
                                <p>6-9 Degree Celsius</p>
                            </span>
                        </div>
                    </div>
                    <img src={bannerimage3} alt="" />
                </div>
            </section>
        </>
    )
}
export default Introduction;
