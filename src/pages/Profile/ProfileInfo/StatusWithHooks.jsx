import React, { useEffect, useState } from "react";
import UserStatus from "style/Users/UserStatus";
import Textarea from "style/common/Textarea";

function StatusWithHooks(props) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <>
      <div>
        {editMode && (
          <Textarea
            value={status}
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
          />
        )}
      </div>
      <div>
        {!editMode && (
          <UserStatus onDoubleClick={() => setEditMode(true)}>
            {props.status || "Status"}
          </UserStatus>
        )}
      </div>
    </>
  );
}

export default StatusWithHooks;
