import styled from "styled-components";

export const FormStyled = styled.form`
  position: absolute;
  color: white;
  display: flex;
  flex-direction: column;
  left: 20%;
  right: 20%;
  top: 30%;
  @media (max-width: 800px) {
    top: 25%;
  }

  h1 {
    text-align: center;
    @media (max-width: 395px) {
      font-size: 1.5rem;
    }
  }
  input {
    height: 3rem;
    @media (max-width: 425px) {
      height: 2rem;
    }
  }
  label {
    margin-top: 5px;
  }
`;
