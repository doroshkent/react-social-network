import styled from "styled-components";

const AppWrapper = styled.div`
  display: grid;
  max-width: 1300px;
  margin: auto;
  grid-template-rows: 90px 1fr;
  grid-template-columns: 230px 1fr;
  grid-template-areas:
    "header header"
    "nav content";
  font-family: "Comfortaa";
`;

export default AppWrapper;
