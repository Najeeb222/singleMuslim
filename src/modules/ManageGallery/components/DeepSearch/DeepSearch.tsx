import Education from "../Education/Education";
import Personal from "../Personal/Personal";
import Profession from "../Profession/Profession";
import QuickSearch from "../QuickSearch/QuickSearch";
import Religion from "../Religion/Religion";
import SearchBar from "../SearchBar/SearchBar";

import {
  EventNote,
  NightlightRound,
  Person,
  School,
  Search,
} from "@mui/icons-material";
import { DeepSearchTitleHighLight } from "@muc/components";
import { Paper } from "@mui/material";

const DeepSearch = () => {
  return (
    <>
      <SearchBar />

      <Paper sx={{ padding: 2, my: 2 }} elevation={3}>
        <DeepSearchTitleHighLight title="Quick Search" icon={<Search />} />
        <QuickSearch />
      </Paper>
      <Paper sx={{ padding: 2, my: 2 }} elevation={3}>
        <DeepSearchTitleHighLight title="Religion" icon={<NightlightRound />} />
        <Religion />
      </Paper>
      <Paper sx={{ padding: 2, my: 2 }} elevation={3}>
        <DeepSearchTitleHighLight title="Education" icon={<School />} />
        <Education />
      </Paper>

      <Paper sx={{ padding: 2, my: 2 }} elevation={3}>
        <DeepSearchTitleHighLight title="Personal" icon={<Person />} />

        <Personal />
      </Paper>
      <Paper sx={{ padding: 2, my: 2 }} elevation={3}>
        <DeepSearchTitleHighLight title="Perofession" icon={<EventNote />} />

        <Profession />
      </Paper>
    </>
  );
};

export default DeepSearch;
