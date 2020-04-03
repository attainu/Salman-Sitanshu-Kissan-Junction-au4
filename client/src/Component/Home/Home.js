import React, { Component } from "react";
import CarouselHome from "./Carousel.js";
import Blog from "./Blog.js";
import Service from "./Services.js";
class Home extends Component {
  render() {
    return (
      <div>
        <CarouselHome />
        <Blog />
        <Service />
      </div>
    );
  }
}

export default Home;
