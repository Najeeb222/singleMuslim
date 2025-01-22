import {
  Gallery,
  Home,
  LandingScreen,
  Likes,
  Loging,
  Search,
} from "@muc/screens";
import { Route, Routes as ReactRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path={"/gallery"} element={<Gallery />} />
      <Route path={"/search"} element={<Search />} />
      <Route path={"/likes"} element={<Likes />} />
      <Route path="/landing_screen" element={<LandingScreen />} />
      <Route path="/loging" element={<Loging />} />
    </ReactRoutes>
  );
};

export default Routes;
