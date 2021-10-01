import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100vw;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.header};
  border-bottom: solid 1px #ddd;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  img {
    width: 100px;
    height: 100px;
  }
`;
