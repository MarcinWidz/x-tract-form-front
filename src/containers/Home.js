import Form from "../components/Form";
import { useState } from "react";
import UserAnswers from "../components/UserAnswers";
import formBackground from "../assets/form-background.png";
import BackgroundImageStyled from "../components/styles/BackgroundImageStyled";
import Container from "../components/styles/Container";

function Home() {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({});
  return (
    <Container>
      <BackgroundImageStyled src={formBackground} />
      {!sent ? (
        <Form data={data} setData={setData} sent={sent} setSent={setSent} />
      ) : (
        <UserAnswers setSent={setSent} data={data} setData={setData} />
      )}
    </Container>
  );
}

export default Home;
