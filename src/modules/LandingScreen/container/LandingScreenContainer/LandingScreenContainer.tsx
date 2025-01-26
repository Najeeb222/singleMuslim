import { LandingLayout } from "@muc/layout";
import LandingSlider from "../../components/LandingSlider/LandingSlider";
import LandingScreenBanner from "../../components/LandingScreenBanner/LandingScreenBanner";
import VideoSection from "../../components/VideoSection/VideoSection";

const LandingScreenContainer = () => {
  return (
    <>
      <LandingLayout>
        <LandingSlider />
        <LandingScreenBanner />
        <VideoSection />
      </LandingLayout>
    </>
  );
};

export default LandingScreenContainer;
