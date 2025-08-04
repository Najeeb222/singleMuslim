
import { SecureRoutes } from "@muc/hoc";
// import { SearchContainer, SearchResultContainer } from "@muc/modules";
import {
  ContactUs,
  Gallery,
  Home,
  LandingScreen,
  Likes,
  Loging,
  // MemberShipPakages,
  Messages,
  Privacy,
  Success,
  TermAndConditionsPage,
  UserInfo,
  UserSetting,
} from "@muc/screens";
import { Route, Routes as ReactRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path={"/following"} element={
        // <SecureRoutes>
        <Gallery />
        // </SecureRoutes>

      } />
      {/* <Route path="/search" element={<SearchContainer />} /> */}
      {/* <Route path="/search/search_result" element={<SearchResultContainer />} /> */}
      {/* <Route path="/membership_pakages" element={<MemberShipPakages />} /> */}
      <Route element={<SecureRoutes/>}>
        <Route path="/messages" element={<Messages />} />
        <Route path={"/likes"} element={<Likes />
      } />
      </Route>
      <Route path="/landing_screen" element={<LandingScreen />} />
      <Route path="/loging" element={<Loging />} />
      <Route path="/user_info/:id" element={<UserInfo />} />
      <Route path="/user_setting/:tab" element={<UserSetting />} />
      <Route path="/term_and_conditions" element={<TermAndConditionsPage />} />
      <Route path="/Privacy_and_Security" element={<Privacy />} />
      <Route path="/stories" element={<Success />} />
      <Route path="/contact_us" element={<ContactUs />} />
    </ReactRoutes>
  );
};

export default Routes;
