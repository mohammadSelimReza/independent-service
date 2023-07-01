// import React from "react";
import infoImg from "../../../img/website/info.jpg";
const Info = () => {
  return (
    <div className="flex my-8">
      <div className="w-1/3 flex justify-center">
        <img src={infoImg} />
      </div>
      <div className="w-2/3">
        <h1 className="text-5xl mb-2">Frequently asked questions:</h1>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-3xl font-medium">
            Why Choose Me?
          </div>
          <div className="collapse-content">
            <p>
              I have experience with learning for 8years and in industry for
              15years.Among all, I try my best to give you all at affordable
              price with best tips.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-3xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-3xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
