import styled from "styled-components";

const StyledMessage = styled.div`
  padding: 15px;
  margin: 5px;
  font-size: 20px;
  background-color: white;
  width: max-content;
  align-self: ${props => (props.isSent ? 'flex-end' : 'flex-start')};
  border-left: ${props => (props.isSent ? 'none' : '3px solid cornflowerblue')};
  border-right: ${props => (props.isSent ? '3px solid cornflowerblue' : 'none')};
`
export default StyledMessage
