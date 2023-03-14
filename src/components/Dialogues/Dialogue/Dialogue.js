import style from "./DialogueItem.module.css";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

const Dialogue = ({ dialogue: {id, name, ava} }) => {
    const path = ` /${id}`;

    const setDialogueActive = ({isActive}) => {
        return isActive ? style.active : '';
    }

    return (
        <div className={style.dialogueItem}>
            <NavLink to={path} className={setDialogueActive}>
                <img className={style.dialoguePhoto} src={ava}/>
                {name}
            </NavLink>
        </div>
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
