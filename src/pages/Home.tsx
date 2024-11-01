import { Link } from "react-router-dom";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <img
        style={{ marginBottom: "25px", width: "236px" }}
        src="/assets/redberry-logo.png"
      />
      <Line></Line>
      <Content>
        <div style={{ position: "relative" }}>
          <Link to={"/personal-info"}>
            <Button>რეზიუმეს დამატება</Button>
          </Link>
          <BgLogo src="/assets/redberry-bg-logo.png"></BgLogo>
        </div>
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url("/assets/redberry-bg.png");
  background-repeat: no-repeat;
  background-position: 0px center;
  padding: 25px 70px 0 70px;
  box-sizing: border-box;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #1a1a1a;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Button = styled.button`
  position: relative;
  z-index: 100;
  padding: 18px 60px;
  border-radius: 8px;
  background-color: #1a1a1a;
  color: white;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
`;

const BgLogo = styled.img`
  width: 220px;
  position: absolute;
  z-index: 1;
  right: -125px;
  top: -27px;
`;
