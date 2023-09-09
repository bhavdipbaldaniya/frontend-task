import React from "react";
import bannerimage1 from "../Images/brand-history.png"
import bannerimage4 from "../Images/.png"

const Leadingbeer = () => {
    return (
        <>
            <section>
                <div className="section-2">
                    <div className="part-1">
                        <img src={bannerimage1} alt="" />
                        <div className="content">
                            <h2>Leading Beer Brewery, Since 1974!</h2>
                            <p className="p1">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh.</p>
                            <p className="p2">Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor.</p>
                        </div>
                    </div>
                    <div className="part-2">
                        <div className="box1">
                            <h3>1974</h3>
                            <div class="hr-theme-slash-2">
                                <div class="hr-line"></div>
                                <div class="hr-icon"><img src={bannerimage4} alt="" /></div>
                                <div class="hr-line"></div>
                            </div>
                            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                        </div>
                        <div className="box1">
                            <h3>1985</h3>
                            <div class="hr-theme-slash-2">
                                <div class="hr-line"></div>
                                <div class="hr-icon"><img src={bannerimage4} alt="" /></div>
                                <div class="hr-line"></div>
                            </div>
                            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                        </div>
                        <div className="box1">
                            <h3>2005</h3>
                            <div class="hr-theme-slash-2">
                                <div class="hr-line"></div>
                                <div class="hr-icon"><img src={bannerimage4} alt="" /></div>
                                <div class="hr-line"></div>
                            </div>
                            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                        </div>
                        <div className="box1">
                            <h3>2021</h3>
                            <div class="hr-theme-slash-2">
                                <div class="hr-line"></div>
                                <div class="hr-icon"><img src={bannerimage4} alt="" /></div>
                                <div class="hr-line"></div>
                            </div>
                            <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Leadingbeer;
