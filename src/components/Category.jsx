import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
  background-color: #f5f5f5;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height:"20vh"})}

`;
const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: black;
  color: white;
  cursor: pointer;
`;
const Category = ({ category }) => {
  return (
    <Container>
      <Image src={category.img} />
      <InfoContainer>
        <Button>SHOP NOW</Button>
      </InfoContainer>
    </Container>
  );
};

export default Category;
