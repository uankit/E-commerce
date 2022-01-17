import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/api";

const Container = styled.div``;
const Wrapper = styled.div`
  background-color: #f4f4f4;

  margin: 20px;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  height: 100%;
`;
const Right = styled.div`
  flex: 2;
  width: 100vw;
  margin-left: 5%;
`;

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
`;

const Title = styled.h1`
  font-weight: 600;
  margin-bottom: 10px;
`;
const Image = styled.img``;

const Input = styled.input`
  flex: 1;
  min-width: 50%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin-top: 15px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Link = styled.a`
  display: block;
  margin: 15px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src="https://i.ibb.co/rsJ62Lv/pic-removebg-preview.png" />
        </Left>
        <Right>
          <Title>LOGIN</Title>
          <Form>
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form>

          <Link>Forgot your Password</Link>
          <Link>Create an account</Link>

          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          {error && <Error>Something went wrong</Error>}
        </Right>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
