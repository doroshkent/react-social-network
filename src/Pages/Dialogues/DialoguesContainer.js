import { sendMessage, updateMessageText } from "redux/dialoguesReducer";
import { connect } from "react-redux";
import Dialogues from "./Dialogues";

const mapStateToProps = (state) => ({
  dialogues: state.dialoguesPage,
});

const DialoguesContainer = connect(mapStateToProps, {
  sendMessage,
  updateMessageText,
})(Dialogues);

export default DialoguesContainer;
