import {
  sendMessageActionCreator,
  updateMessageTextActionCreator,
} from "redux/dialoguesReducer";
import { connect } from "react-redux";
import Dialogues from "./Dialogues";

const mapStateToProps = (state) => ({
  dialogues: state.dialoguesPage,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => dispatch(sendMessageActionCreator()),
  updateMessageText: (message) =>
    dispatch(updateMessageTextActionCreator(message)),
});

const DialoguesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogues);

export default DialoguesContainer;
