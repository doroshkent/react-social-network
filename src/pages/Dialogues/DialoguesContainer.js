import { sendMessage, updateMessageText } from "redux/dialoguesReducer";
import { connect } from "react-redux";
import Dialogues from "./Dialogues";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => ({
  dialogues: state.dialoguesPage,
});

export default compose(
  connect(mapStateToProps, {
    sendMessage,
    updateMessageText,
  }),
  withAuthRedirect
)(Dialogues);
