import styled from "styled-components";

const ProfileMainInfo = styled.div`
  display: grid;
  max-width: 400px;
  margin-bottom: 30px;
  grid-template-columns: 160px max-content;
  grid-template-rows: 50px 50px 1fr;
  grid-template-areas:
    "photo fullName"
    "photo status"
    "photo changePhoto";
`;

export default ProfileMainInfo;
