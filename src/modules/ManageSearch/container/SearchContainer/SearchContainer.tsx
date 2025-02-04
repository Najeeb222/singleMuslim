import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { COLORS } from "@muc/constants";
import {
  AlternateEmail,
  ArrowRight,
  Done,
  EventNote,
  NightlightRound,
  Person,
  School,
  Search,
} from "@mui/icons-material";
import { Container, Divider, Paper } from "@mui/material";
import { AppLayout } from "@muc/layout";
import { CustomTableContent } from "@muc/components";
import QuickSearch from "../../components/QuickSearch/QuickSearch";
import Religion from "../../components/Religion/Religion";
import Education from "../../components/Education/Education";
import Personal from "../../components/Personal/Personal";
import UserName from "../../components/UserName/UserName";
import Profession from "../../components/Profession/Profession";
import SavedTab from "../../components/SavedTab/SavedTab";

export default function SidebarTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Breadcrumb data based on the selected tab
  const breadcrumbPaths = [
    ["Home", "Search", "Quick"],
    ["Home", "Search", "Religion"],
    ["Home", "Search", "Education"],
    ["Home", "Search", "Personal"],
    ["Home", "Search", "Profession"],
    ["Home", "Search", "Username"],
    ["Home", "Search", "Saved"],
  ];

  return (
    <AppLayout>
      <Box sx={{ bgcolor: COLORS.gray.lightGray, width: "100%" }}>
        <Container
          maxWidth={"lg"}
          sx={{ bgcolor: COLORS.gray.lightDarkGray, padding: "16px" }}
        >
          <Typography
            variant="h2"
            sx={{
              color: COLORS.dark.darkblack,
              textAlign: "center",
              padding: "10px",
            }}
          >
            Search for a match
          </Typography>
          <Box
            component={Paper}
            sx={{ display: "flex", bgcolor: COLORS.white.main }}
          >
            {/* Sidebar Tabs */}
            <Box
              sx={{
                width: 270,
                borderRight: `2px solid ${COLORS.gray.main}`,
                p: 2,
              }}
            >
              {/* Breadcrumb Navigation */}
              <Breadcrumbs
                separator={<ArrowRight fontSize="small" />}
                aria-label="breadcrumb"
                sx={{ mb: 2 }}
              >
                {breadcrumbPaths[value].map((path, index) => (
                  <Link
                    key={index}
                    href="#"
                    sx={{
                      color: COLORS.secondary.main,
                      fontSize: "12px",
                      minHeight: "10px",
                    }}
                    underline="hover"
                  >
                    {path}
                  </Link>
                ))}
              </Breadcrumbs>
              <Divider />
              {/* Tabs */}
              <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
                variant="scrollable"
                scrollButtons="auto"
                sx={{ width: "100%" }}
              >
                {tabsTitleData.map((item, i) => (
                  <Tab
                    key={i}
                    icon={item.icon}
                    iconPosition="start"
                    label={item.title}
                    sx={{
                      fontSize: "18px",
                      mt: i > 3 ? 3 : 0,
                      padding: 2,
                      borderBottom: `2px solid ${COLORS.gray.main}`,
                      minHeight: "48px",
                      justifyContent: "start",
                      textTransform: "none",
                      "&.Mui-selected": {
                        color: COLORS.white.main,
                        fontWeight: "bold",
                        backgroundColor: COLORS.secondary.main,
                      },
                    }}
                  />
                ))}
              </Tabs>
            </Box>

            {/* Right Side Content */}
            <Box sx={{ flex: 1, p: 3 }}>
              {/* Tab Content */}
              {value === 0 && (
                <CustomTableContent
                  title="Quick Search"
                  TabContent={<QuickSearch />}
                />
              )}
              {value === 1 && (
                <CustomTableContent
                  title="Religion"
                  TabContent={<Religion />}
                />
              )}
              {value === 2 && (
                <CustomTableContent
                  title="Education"
                  TabContent={<Education />}
                />
              )}
              {value === 3 && (
                <CustomTableContent
                  title="Personal"
                  TabContent={<Personal />}
                />
              )}
              {value === 4 && (
                <CustomTableContent
                  title="Profession"
                  TabContent={<Profession />}
                />
              )}
              {value === 5 && (
                <CustomTableContent
                  title="Username"
                  TabContent={<UserName />}
                />
              )}
              {value === 6 && (
                <CustomTableContent title="Saved" TabContent={<SavedTab />} />
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </AppLayout>
  );
}

const tabsTitleData = [
  { title: "Quick", icon: <Search />, id: 0 },
  { title: "Religion", icon: <NightlightRound />, id: 1 },
  { title: "Education", icon: <School />, id: 2 },
  { title: "Personal", icon: <Person />, id: 3 },
  { title: "Profession", icon: <EventNote />, id: 4 },
  { title: "Username", icon: <AlternateEmail />, id: 5 },
  { title: "Saved", icon: <Done />, id: 6 },
];
