import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getAuthor,
  getAuthorApprovedPending,
} from "../../../store/post/actions";
import { ScaleLoader } from "react-spinners";
import DataTableComponent from "./DataTableComponent";

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

export default function TabsSection() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const { authors, isLoading } = useSelector((state) => state.post);
  console.log(
    "🚀 ~ file: TabsSection.jsx:54 ~ const{authors,error}=useSelector ~ authors:",
    authors
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  useEffect(() => {
    if (value === 0) {
      dispatch(getAuthor());
    } else if (value === 1) {
      const status = "Author";
      dispatch(getAuthorApprovedPending(status));
    } else {
      const status = "Pending";
      dispatch(getAuthorApprovedPending(status));
    }
  }, [value]);

  return (
    <Box sx={{ bgcolor: "background.paper", width: "80%" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", color: "black" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="All Authors" {...a11yProps(0)} />
          <Tab label="Approved Authors" {...a11yProps(1)} />
          <Tab label="Pending Authors" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {isLoading ? (
            <Stack
              alignItems={"center"}
              height={"30vh"}
              justifyContent={"center"}
            >
              <ScaleLoader color="#000000" />
            </Stack>
          ) : (
            <Stack height={"100%"} justifyContent={"center"}>
              {authors ? (
                <DataTableComponent authors={authors} />
              ) : (
                <Typography>No Author Yet</Typography>
              )}
            </Stack>
          )}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {isLoading ? (
            <Stack
              alignItems={"center"}
              height={"30vh"}
              justifyContent={"center"}
            >
              <ScaleLoader color="#000000" />
            </Stack>
          ) : (
            <Stack height={"100%"} justifyContent={"center"}>
              {authors ? (
                <DataTableComponent authors={authors} />
              ) : (
                <Typography>No Approved Author</Typography>
              )}
            </Stack>
          )}
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          {isLoading ? (
            <Stack
              alignItems={"center"}
              height={"30vh"}
              justifyContent={"center"}
            >
              <ScaleLoader color="#000000" />
            </Stack>
          ) : (
            <Stack height={"100%"} justifyContent={"center"}>
              {authors ? (
                <DataTableComponent authors={authors} />
              ) : (
                <Typography>No Pending Author</Typography>
              )}
            </Stack>
          )}
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
