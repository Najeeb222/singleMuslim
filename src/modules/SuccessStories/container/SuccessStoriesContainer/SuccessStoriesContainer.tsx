import { AppLayout } from "@muc/layout"
import { Container, Stack } from "@mui/material"
import SuccessHeader from "../../components/SuccessHeader/SuccessHeader"
import SuccessStoriesCard from "../../components/SuccessStoriesCard/SuccessStoriesCard"

const SuccessStoriesContainer = () => {
  return (
<AppLayout>
  <Container maxWidth={'lg'}>
    <Stack>
      <SuccessHeader/>
      <SuccessStoriesCard/>
    </Stack>
  </Container>
</AppLayout>
  )
}

export default SuccessStoriesContainer