import ProfileDescription from "style/Profile/ProfileInfo/ProfileDescription";
import ProfileCoverPhoto from "style/Profile/ProfileInfo/ProfileCoverPhoto";

const ProfileInfo = () => (
    <div>
        <div>
            <ProfileCoverPhoto
                src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
        </div>
        <ProfileDescription>
            ava, description
        </ProfileDescription>
    </div>
)

export default ProfileInfo;
