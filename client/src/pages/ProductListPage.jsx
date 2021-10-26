import styled from "styled-components";
import Announcement from "../components/Announcement";
import Nav from "../components/Nav";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;
const Title = styled.h1`
  margin-top: 2em;
  margin-left: 1.2em;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  padding: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductListPage = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");

  const handleChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Container>
      <Announcement />
      <Nav />
      <Title>MVMX. EXCLUSIVES</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={handleChange}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>green</Option>
            <Option>yellow</Option>
          </Select>
          <Select name="size" onChange={handleChange}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="new">Newest</Option>
            <Option value="asc">Low to High</Option>
            <Option value="desc">High to low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductListPage;
