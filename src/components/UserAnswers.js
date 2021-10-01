import { useEffect, useState } from "react";
import UserAnswersStyled from "./styles/UserAnswers.styled";
import axios from "axios";
import ButtonStyled from "./styles/Button.styled";

function UserAnswers({ data, setData, setSent }) {
  const [isLoading, setIsLoading] = useState(true);
  const [display, setDisplay] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/answer/${data._id}`
        );
        setDisplay(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [data._id]);

  const handleClick = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/delete/${data._id}`
      );
      setSent(false);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return isLoading ? (
    <p>chargement...</p>
  ) : (
    <UserAnswersStyled>
      <h1>Nom: {display.name}</h1>
      <h1>Prénom: {display.last_name}</h1>
      <h1>E-mail: {display.email}</h1>
      <h1>Numero: {display.number}</h1>
      <ButtonStyled onClick={handleClick} style={{ margin: "0 auto" }}>
        Recommencer
      </ButtonStyled>
    </UserAnswersStyled>
  );
}

export default UserAnswers;
