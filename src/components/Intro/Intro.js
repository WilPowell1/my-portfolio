import React from "react";
import "./intro.css";
import { SocialIcon } from "react-social-icons";
import MyCv from "../../docs/Wil CV.pdf";
import ProfilePic from "../../images/profile-pic.png";

const Intro = () => {

    return (
        <div className="intro" id="intro">
          <div className="left">
            <img src={ProfilePic} alt=""/>
          </div>
          <div className="right">
            <div className="wrapper">
              <h2>Hi, I'm</h2>
              <h1>Wil</h1>
              <h3>
                web developer
              </h3>
              <div className="icon-wrapper">
                <div className="icon-link">
                  <SocialIcon 
                    url="https://github.com/WilPowell1"
                    className="icon-gh"
                    target="blank" />
                </div>
                <div className="icon-link">
                  <SocialIcon
                    url="https://www.linkedin.com/in/wil-powell-9b37a784/"
                    className="icon-li"
                    target="blank" />
                </div>
              </div>
              <div className="intro-button">
                <a
                  href={MyCv}
                  target="blank" 
                  className="cv-button" type="submit">CV</a>
                <a
                  href="#portfolio"
                  className="portfolio-button">Portfolio</a>
              </div>
          </div>
        </div>
      </div>
    );
}

export default Intro;