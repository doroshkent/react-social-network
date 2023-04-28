import styled from "styled-components";

const UserStatus = styled.p`
  margin-right: 70px;
  color: #324a59;
  font-size: 24px;
  display: ${(props) => props.display || "block"};
`;

export default UserStatus;
