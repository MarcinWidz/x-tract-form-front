import styled from "styled-components";

const userAnswersStyled = styled.div`
  position: absolute;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 20%;
  right: 20%;
  top: 30%;
  h1 {
    text-align: center;
    @media (max-width: 425px) {
      font-size: 1.5rem;
      overflow: scroll;
    }
  }
`;

export default userAnswersStyled;
