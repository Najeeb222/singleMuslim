import { SearchContainer, SearchResultContainer } from "@muc/modules";
import {

  Gallery,
  Home,
  LandingScreen,
  Likes,
  Loging,
  MemberShipPakages,
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
      <Route path={"/gallery"} element={<Gallery />} />
      <Route path="/search" element={<SearchContainer />} />
      <Route path="/search/search_result" element={<SearchResultContainer />} />
      <Route path="/membership_pakages" element={<MemberShipPakages />} />
      <Route path={"/likes"} element={<Likes />} />
      <Route path="/landing_screen" element={<LandingScreen />} />
      <Route path="/loging" element={<Loging />} />
      <Route path="/user_info/:id" element={<UserInfo />} />
      <Route path="/user_setting/:tab" element={<UserSetting />} />
      <Route path="/term_and_conditions" element={<TermAndConditionsPage/>}/>  
      <Route path="/Privacy_and_Security"  element={<Privacy/>}/>
      <Route path="success-stories" element={<Success/>}/>
    </ReactRoutes>
  );
};

export default Routes;
