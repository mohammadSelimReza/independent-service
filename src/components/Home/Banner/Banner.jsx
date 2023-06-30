// import React from "react";
import banner1 from "../../../img/banner-photo/banner-01.jpg";
import banner2 from "../../../img/banner-photo/banner-02.png";
import banner3 from "../../../img/banner-photo/banner-03.jpg";
import banner4 from "../../../img/banner-photo/banner-04.jpg";
const Banner = () => {
  return (
    <div>
      <main>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img className="w-full" src={banner1} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img className="w-full" src={banner2} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img className="w-full" src={banner3} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img className="w-full" src={banner4} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Banner;
