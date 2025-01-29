import { CustomUserInfoCard } from "@muc/components";
import UserImgSlider from "../UserImgSlider/UserImgSlider";

const UserInfoCard = () => {
  return (
    <>
      <CustomUserInfoCard
        name={"ali"}
        age="30"
        flage="/assets/images/pak-flag.png"
        extraImgs={<UserImgSlider />}
        status="Online"
      />
    </>
  );
};

export default UserInfoCard;
