import React from "react";
import { useForm } from "react-hook-form";
import Button from "style/common/Button";
import ProfileForm from "style/Profile/ProfileInfo/ProfileForm";
import UserContacts from "style/Profile/ProfileInfo/UserContacts";
import { ErrorMessage } from "style/common/ErrorMessage";
import { CheckboxInput, Textarea } from "style/common/CommonInputStyles";

function ProfileDataForm({ deactivateEditMode, saveProfile, profile }) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: profile,
  });

  const onSubmit = async (updatedProfile) => {
    try {
      await saveProfile(updatedProfile);
      deactivateEditMode();
    } catch (e) {
      setError("server", { message: e.message });
    }
  };

  const handleInput = (fieldName) => {
    clearErrors("server");
    trigger(fieldName);
  };

  return (
    <ProfileForm onSubmit={handleSubmit(onSubmit)}>
      <Button>Save</Button>
      {errors.server && <ErrorMessage>{errors.server.message}</ErrorMessage>}
      <h2>Full name:</h2>
      <Textarea
        placeholder={"You're full name"}
        {...register("fullName")}
        onChange={() => handleInput("fullName")}
      />
      <h2>About me:</h2>
      <Textarea
        placeholder={"Tell us something about you"}
        {...register("aboutMe")}
        onChange={() => handleInput("aboutMe")}
      />
      <h2>Looking for a job:</h2>
      <CheckboxInput type="checkbox" {...register("lookingForAJob", {})} /> Yes,
      I'm looking for a job
      <Textarea
        placeholder={"Write about a job you're professional skills"}
        {...register("lookingForAJobDescription")}
        onChange={() => handleInput("lookingForAJobDescription")}
      />
      <h2>Contacts:</h2>
      <UserContacts>
        {Object.keys(profile.contacts).map((socialMedia) => (
          <li key={socialMedia}>
            {socialMedia}:{" "}
            <Textarea
              placeholder={socialMedia}
              {...register("contacts." + socialMedia)}
              onChange={() => handleInput("contacts." + socialMedia)}
            />
          </li>
        ))}
      </UserContacts>
    </ProfileForm>
  );
}

export default ProfileDataForm;
