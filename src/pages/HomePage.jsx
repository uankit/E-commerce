import Navbar from "../components/Nav";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

import styled from "styled-components";

const HomePage = () => {
  const Title = styled.h2`
    margin: 20px;
    font-size: 50px;
  `;
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Title>CATEGORIES TO BAG</Title>
      <Categories />
      <Title>TRENDING AT MVMX. TODAY</Title>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default HomePage;
