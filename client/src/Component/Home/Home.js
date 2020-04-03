import React, { Component } from "react";
import CarouselHome from "./Carousel.js";
import Blog from "./Blog.js";
import Service from "./Services.js";
import PageDescription from './PageDescription';
import Counter from './Count';

class Home extends Component {
  render() {
    return (
      <div>
        <CarouselHome />
        <Blog />
        <Service />
        <PageDescription />
        <Counter />
      </div>
    );
  }
}

export default Home;
