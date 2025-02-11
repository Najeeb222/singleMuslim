import { termAndConditionsData } from "@muc/constants";
import TermsAndConditionsCompo from "../../components/TermAndConditionsCard/TermAndConditionsCard";
import { AppLayout } from "@muc/layout";

const TermAndConditaionsContainer = () => {
  console.log(termAndConditionsData);
  return (
    <AppLayout>
      <TermsAndConditionsCompo termAndConditionsData={termAndConditionsData} />
    </AppLayout>
  );
};

export default TermAndConditaionsContainer;
