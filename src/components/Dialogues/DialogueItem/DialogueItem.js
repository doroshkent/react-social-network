import style from "./DialogueItem.module.css";
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
    const path = ` /${props.id}`;

    const setDialogueActive = ({isActive}) => {
        return isActive ? style.active : '';
    }

    return (
        <div className={style.dialogueItem}>
            <NavLink to={path} className={setDialogueActive}>
                <img className={style.dialoguePhoto} src={props.ava}/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogueItem;
