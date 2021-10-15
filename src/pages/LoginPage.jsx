import styled from "styled-components";

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

const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src="https://i.ibb.co/rsJ62Lv/pic-removebg-preview.png" />
        </Left>
        <Right>
          <Title>LOGIN</Title>
          <Form>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
          </Form>

          <Link>Forgot your Password</Link>
          <Link>Create an account</Link>

          <Button>Login</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
