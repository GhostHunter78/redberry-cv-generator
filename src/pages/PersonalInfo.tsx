import styled from "styled-components";
import Header from "../components/Header";

function PersonalInfo() {
  return (
    <Container>
      <Content>
        <Header
          previousLocation={"/home"}
          pageTitle={"პირადი ინფო"}
          PageNumber={"1"}
        />
      </Content>
      <CVSample></CVSample>
    </Container>
  );
}

export default PersonalInfo;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  width: 55%;
  padding: 20px 120px 50px 30px;
`;

const CVSample = styled.div`
  background-color: white;
  width: 45%;
`;
