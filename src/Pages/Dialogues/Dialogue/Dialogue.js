import React from "react";
import PropTypes from "prop-types";
import StyledDialogue from "style/Dialogues/Dialogue/StyledDialogue";
import DialogueNavLink from "style/Dialogues/Dialogue/DialogueNavLink";
import DialoguePhoto from "style/Dialogues/Dialogue/DialoguePhoto";

const Dialogue = ({ dialogue: {id, name, ava} }) => {
    const path = ` /${id}`;

    return (
        <StyledDialogue>
            <DialogueNavLink to={path}>
                <DialoguePhoto src={ava}/>
                {name}
            </DialogueNavLink>
        </StyledDialogue>
    )
}

Dialogue.propTypes = {
    dialogue: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        ava: PropTypes.node
    })
}

export default Dialogue;
