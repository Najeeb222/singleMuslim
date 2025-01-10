

import { Gallery, Home, Search } from "@muc/screens";
import { Route, Routes as ReactRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <ReactRoutes>
  <Route path="/" element={<Home/>}/>
      <Route path={'/gallery'} element={<Gallery />} />
      <Route path={'/search'} element={<Search />} />
  
     
    </ReactRoutes>
  );
};

export default Routes;
