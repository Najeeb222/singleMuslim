import { COLORS } from "@muc/constants";
import {
  AlternateEmail,
  Done,
  Grading,
  NightlightRound,
  Person,
  School,
  Search,
} from "@mui/icons-material";
import {
  Box,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

const SearchLayout = ({ children }: any) => {
  const [active, setActive] = useState<number | null>(null);
  const handleActive = (i: number) => {
    setActive(i);
  };
  return (
    <>
      <Container maxWidth={"lg"} sx={{ bgcolor: COLORS.gray.lightDarkGray }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: "27px",
            fontWeight: "500",
            color: COLORS.dark.darkblack,
          }}
        >
          Search For a Match
        </Typography>
        <Box component={"aside"} sx={{ width: "270px" }}>
          <List>
            {asideSearchData.map((item, i) => (
              // <Link to={item.path}>
              <ListItemButton
                onClick={() => handleActive(i)}
                sx={{
                  bgcolor:
                    i === active ? COLORS.secondary.main : COLORS.white.main,
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      i === active ? COLORS.white.main : COLORS.secondary.main,
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color: i === active ? COLORS.white.main : COLORS.dark.main,
                  }}
                  primary={item.title}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
        <Box>{children}</Box>
      </Container>
    </>
  );
};

export default SearchLayout;

const asideSearchData = [
  {
    title: "Quick Search",
    icon: <Search />,
    path: "/quick_search",
  },
  {
    title: "Religion",
    icon: <NightlightRound />,
    path: "/religion",
  },
  {
    title: "Education",
    icon: <School />,
    path: "/education",
  },
  {
    title: "Personal",
    icon: <Person />,
    path: "/personal",
  },
  {
    title: "Profession",
    icon: <Grading />,
    path: "/profession",
  },
  {
    title: "Username",
    icon: <AlternateEmail />,
    path: "/username",
  },
  {
    title: "Saved",
    icon: <Done />,
    path: "/saved",
  },
];
