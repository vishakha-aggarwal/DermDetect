import React from "react";
import img1 from '../../images/slider1.png'
import img2 from '../../images/slider2.jpeg'
import img3 from '../../images/slider3.jpeg'
import img4 from '../../images/slider4.jpeg'
import img5 from '../../images/slider5.jpeg'

export const Projects = () => {
  
  const projects = [
    {
      title: "Art Vista",
      description: "(FullStack Project)",
      imgUrl: img1,
      type: "web",
      link: "https://github.com/vishakha-aggarwal/ArtVista",
    },
    {
      title: "FundQuest",
      description: "(Ethereum Blockchain Development)",
      imgUrl: img2,
      type: "blockchain",
      link: "https://github.com/vishakha-aggarwal/Fund-Raiser-Campaign",
    },
    {
      title: "ChatterBox",
      description: "(FullStack Project)",
      imgUrl: img3,
      type: "web",
      link: "https://github.com/vishakha-aggarwal/ChatterBox",
    }
  ];
  
  return (
    <div>
      <a href="https://github.com/vishakha-aggarwal/ChatterBox" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", color: "black"}}>
        <div className="proj-imgbx" style={{height: "198px"}}>
          <img src={img1} style={{height: "inherit"}} alt="project card"/>
          <div className="proj-txtx">
            <h4>title</h4>
            <span>description</span>
          </div>
        </div>
      </a>
    </div>
  );
};