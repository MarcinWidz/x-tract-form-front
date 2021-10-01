import Form from "../components/Form";
import { useState } from "react";
import UserAnswers from "../components/UserAnswers";
import formBackground from "../assets/form-background.png";
import BackgroundImageStyled from "../components/styles/BackgroundImageStyled";

function Home() {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({});
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <BackgroundImageStyled src={formBackground} />
      {!sent ? (
        <Form data={data} setData={setData} sent={sent} setSent={setSent} />
      ) : (
        <UserAnswers setSent={setSent} data={data} setData={setData} />
      )}
    </div>
  );
}

export default Home;
