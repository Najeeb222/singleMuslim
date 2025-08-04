import {  CustomTextField } from "@muc/components";

import { Stack } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const SearchBar = () => {
  const methods = useForm();
  return (
    <React.Fragment>
 
      
     
        <FormProvider {...methods}>
          <Stack  >
         
              <CustomTextField
                type="text"
                placeholder="search username here"
                name="search"
                height="34px"
                width="100%"
              />
              {/* <CustomButton
                title="Search"
                variant="contained"
                height="100%"
                width="120px"
                icon={<Search/>}
                background={COLORS.secondary.main}
                color={COLORS.white.main}
              /> */}
        
            {/* <Stack direction={"row"} mt={2}>
              <CustomButton
                width="80%"
                variant="contained"
                title="Refine search"
                background={COLORS.secondary.main}
                color={COLORS.white.main}
              />
              <CustomButton
                variant="contained"
                title="Reset search"
                width="80%"
                background={COLORS.secondary.main}
                color={COLORS.white.main}
              />
            </Stack> */}
          </Stack>
        </FormProvider>

    </React.Fragment>
  );
};

export default SearchBar;
