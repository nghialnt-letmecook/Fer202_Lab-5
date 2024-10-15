import React from "react";
import Mycarousel from "../components/Carousel/Mycarousel";
import Circleimages from "../components/CircleImage/Circleimages";
import menu1 from "../assets/menu-01.jpg";
import menu2 from "../assets/menu-02.jpg";
import menu3 from "../assets/menu-03.jpg";
import menu4 from "../assets/menu-04.jpg";
import menu5 from "../assets/menu-05.jpg";
import menu6 from "../assets/menu-06.jpg";
import menu7 from "../assets/menu-07.jpg";
import menu8 from "../assets/menu-08.jpg";

const Home = () => {
  return (
    <div className="w-100 p-0 container">
      <Mycarousel />
      <div className="container mt-4">
        <div className="row justify-content-between align-items-center">
          <div className="col-1">
            <Circleimages image={menu1} />
          </div>
          <div className="col-1">
            <Circleimages image={menu2} />
          </div>
          <div className="col-1">
            <Circleimages image={menu3} />
          </div>
          <div className="col-1 ">
            <Circleimages image={menu4} />
          </div>
          <div className="col-1">
            <Circleimages image={menu5} />
          </div>
          <div className="col-1">
            <Circleimages image={menu6} />
          </div>
          <div className="col-1">
            <Circleimages image={menu7} />
          </div>
          <div className="col-1">
            <Circleimages image={menu8} />
          </div>
        </div>
      </div>
      <h3 style={{color: "red", marginLeft: "20px"}}>This is <span style={{fontWeight: "bold"}}>Home Page</span></h3>
    </div>
  );
};

export default Home;
