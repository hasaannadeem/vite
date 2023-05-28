import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ProfileDetailScreen from "../../screens/profile/ProfileDetailScreen";
import EditDetailsScreen from "../../screens/profile/EditDetailsScreen";
import {
  Button,
  Stack,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [viewProfile, setViewProfile] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const nav = useNavigate();

  return (
    <Grid padding={"0px"} mt={2} mx={2} maxWidth="xl">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="black"
        aria-label="full width tabs example"
        sx={{
          width: "100%",
          background: "transparent",
          // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: 0,
        }}
      >
        <Tab
          style={{ minWidth: "50%", borderRadius: "15px 5px 5px 15px" }}
          sx={{
            "&.Mui-selected": {
              backgroundColor: "black",
              color: "white",
            },
          }}
          label="General Setting"
          {...a11yProps(0)}
        />
        <Tab
          style={{ minWidth: "50%", borderRadius: "5px 15px 15px 5px" }}
          sx={{
            "&.Mui-selected": {
              backgroundColor: "black",
              color: "white",
            },
          }}
          label="Posting"
          {...a11yProps(1)}
        />
      </Tabs>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {viewProfile ? (
            <ProfileDetailScreen
              viewProfile={viewProfile}
              setProfile={setViewProfile}
            />
          ) : (
            <EditDetailsScreen
              viewProfile={viewProfile}
              setProfile={setViewProfile}
            />
          )}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Stack px={5} spacing={3}>
            <Card
              sx={{ width: "100%", textAlign: "center", padding: "1rem" }}
              elevation={3}
            >
              <CardHeader title="Become Authorized First"></CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  sx={{
                    textAlign: "center",
                    backgroundColor: "black",
                    margin: "0 auto",
                    color: "white",
                    ":hover": {
                      bgcolor: "white",
                      color: "black",
                    },
                  }}
                  onClick={() => nav("/author-consent")}
                >
                  Become Authorized
                </Button>
              </CardContent>
            </Card>
          </Stack>
        </TabPanel>
      </SwipeableViews>
    </Grid>
  );
}
