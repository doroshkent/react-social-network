import React, {useState} from "react";
import {useForm} from "react-hook-form";
import Textarea from "style/common/Textarea";
import Input from "style/common/Input";
import Button from "style/common/Button";
import ProfileForm from "style/Profile/ProfileInfo/ProfileForm";
import UserContacts from "style/Profile/ProfileInfo/UserContacts";
import {ErrorMesssage} from "style/common/ErrorMessage";

function ProfileDataForm({deactivateEditMode, saveProfile, profile}) {
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: profile,
  });

  const onSubmit = async (updatedProfile) => {
    try {
      await saveProfile(updatedProfile);
      deactivateEditMode();
    } catch (error) {
      setServerError(error.message)
    }
  }

  return (
    <>
      <ProfileForm onSubmit={handleSubmit(onSubmit)}>
        <Button>Save</Button>
        {serverError && <ErrorMesssage>{serverError}</ErrorMesssage>}
        <h2>Full name:</h2>
        <Textarea placeholder={"You're full name"} {...register("fullName")} />
        <h2>About me:</h2>
        <Textarea placeholder={"Tell us something about you"} {...register("aboutMe")} />
        <h2>Looking for a job:</h2>
        <Input type="checkbox" {...register("lookingForAJob", {})} /> Yes, I'm looking for a job
        <Textarea
          placeholder={"Write about a job you're professional skills"}
          {...register("lookingForAJobDescription")}
        />
        <h2>Contacts:</h2>
        <UserContacts>
          {Object.keys(profile.contacts).map(socialMedia => (
            <li>
              {socialMedia}: <Textarea placeholder={socialMedia} {...register("contacts." + socialMedia)}/>
            </li>
          ))}
        </UserContacts>
      </ProfileForm>
    </>
  );
}

export default ProfileDataForm;
