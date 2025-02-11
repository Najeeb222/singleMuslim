import { SearchContainer, SearchResultContainer } from "@muc/modules";
import {

  Gallery,
  Home,
  LandingScreen,
  Likes,
  Loging,
  MemberShipPakages,
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
      <Route path="search_result" element={<SearchResultContainer />} />
      <Route path="/membership_pakages" element={<MemberShipPakages />} />
      <Route path={"/likes"} element={<Likes />} />
      <Route path="/landing_screen" element={<LandingScreen />} />
      <Route path="/loging" element={<Loging />} />
      <Route path="/user_info/:id" element={<UserInfo />} />
      <Route path="/user_setting/:tab" element={<UserSetting />} />
   
    </ReactRoutes>
  );
};

export default Routes;
