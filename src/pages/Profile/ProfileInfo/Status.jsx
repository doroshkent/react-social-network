import React, { useEffect, useState } from "react";
import UserStatus from "style/Users/UserStatus";
import { Textarea } from "style/common/CommonInputStyles";

function Status({ profileStatus, updateStatus, isOwner }) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(profileStatus);

  useEffect(() => {
    setStatus(profileStatus);
  }, [profileStatus]);

  const deactivateEditMode = () => {
    setEditMode(false);
    updateStatus(status);
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
      {!editMode && (
        <UserStatus
          style={{ display: "inline" }}
          onDoubleClick={() => {
            if (!isOwner) return
            setEditMode(true)
          }}
        >
          {profileStatus || "Status"}
        </UserStatus>
      )}
    </>
  );
}

export default Status;
