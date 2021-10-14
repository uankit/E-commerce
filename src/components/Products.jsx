import styled from "styled-components";
import { bestSellingProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Products = () => {
  return (
    <Container>
      {bestSellingProducts.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
