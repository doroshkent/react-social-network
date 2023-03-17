import {sendMessageActionCreator, updateMessageTextActionCreator} from "redux/dialoguesReducer"
import Dialogues from "./Dialogues";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    dialogues: state.dialoguesPage
})

const mapDispatchToProps = (dispatch) => ({
    sendMessage: () => dispatch(sendMessageActionCreator()),
    updateMessageText: (message) => dispatch(updateMessageTextActionCreator(message))
})

const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogues)

export default DialoguesContainer;
