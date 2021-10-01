import styled from "styled-components";
import formBackground from "../../assets/form-background.png";
export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background-image: url(${formBackground});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: yellow;
`;
