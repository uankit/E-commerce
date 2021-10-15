import styled from "styled-components";
import { categories } from "../data";
import Category from "./Category";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <Category category={category} key={category.id} />
      ))}
    </Container>
  );
};

export default Categories;
