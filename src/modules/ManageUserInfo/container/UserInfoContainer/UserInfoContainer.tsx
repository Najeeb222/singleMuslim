import { UserInfoCard } from "@muc/components";
import { userData } from "@muc/constants";
import { useParams } from "react-router";

const UserInfoContainer = () => {
  const { id } = useParams();

  const filteredUser = userData.filter((item) => item.id === Number(id));
  console.log(filteredUser,".,,.,.,.,,,,,,,")

  return (
    <>
      <UserInfoCard />
    </>
  );
};

export default UserInfoContainer;
