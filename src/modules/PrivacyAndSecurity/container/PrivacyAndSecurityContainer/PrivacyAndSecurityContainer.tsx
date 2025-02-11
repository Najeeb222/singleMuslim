import { privacyAndSecurityData } from "@muc/constants";
import PrivacyAndSecurityCompo from "../../components/PrivacyAndSecurityCard/PrivacyAndSecurityCard";
import { AppLayout } from "@muc/layout";

const PrivacyAndSecurityContainer = () => {
  return(
  <AppLayout>
    <PrivacyAndSecurityCompo data={privacyAndSecurityData} />
  </AppLayout>
  )
};

export default PrivacyAndSecurityContainer;
