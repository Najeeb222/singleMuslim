import { Box } from "@mui/material"
import { Footer, Navbar } from "../layout"


const AppLayout = ({children}:any) => {
  return (
    <>
    <Navbar/>
    <Box>{children}</Box>
    <Footer/>
      
    </>
  )
}

export default AppLayout
