import { sendMessage, updateMessageText } from "redux/dialoguesReducer";
import { connect } from "react-redux";
import Dialogues from "./Dialogues";

const mapStateToProps = (state) => ({
  dialogues: state.dialoguesPage,
  isAuth: state.auth.isAuth,
});

const DialoguesContainer = connect(mapStateToProps, {
  sendMessage,
  updateMessageText,
})(Dialogues);

export default DialoguesContainer;
