import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 12rem;
  height: 3rem;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    cursor: pointer;
  }
`;

export default ButtonStyled;
