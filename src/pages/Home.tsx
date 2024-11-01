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
        <Button>რეზიუმეს დამატება</Button>
      </Content>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/assets/redberry-bg.png"),
    url("/assets/redberry-bg-logo.png");
  background-size: cover, 220px;
  background-repeat: no-repeat;
  background-position: 0px center, right 35% top 65%;
  padding: 25px 70px 0 70px;
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
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  align-content: center;
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
