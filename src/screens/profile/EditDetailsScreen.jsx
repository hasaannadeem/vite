import React, { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  Edit,
  Lock,
} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";

import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import BasicModal from "../../components/Modal/Modal";
import { useLocation, useNavigate } from "react-router";

const EditDetailsScreen = ({ viewProfile, setProfile, formik }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedStates, setSelectedStates] = useState(true);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const nav = useNavigate();
  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setProfile(!viewProfile);
    setShowModal(false);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  return (
    <Stack px={5} spacing={3}>
      <Card sx={{ width: "100%" }} elevation={3}>
        <CardHeader title="Personal Details"></CardHeader>

        <CardContent>
          <Grid>
            <Grid className="viewField" container xs={12} spacing={3}>
              <Grid item xs={12} md={4} direction={"row"} spacing={2}>
                <Typography sx={{ whiteSpace: "nowrap" }}>
                  First Name
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} direction={"row"} spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  fullWidth
                  disabled={false}
                  // value={formik.values.lastName}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // error={
                  //   formik.touched.lastName && formik.errors.lastName
                  //     ? true
                  //     : false
                  // }
                  // helperText={
                  //   formik.touched.lastName && formik.errors.lastName
                  //     ? formik.errors.lastName
                  //     : ""
                  // }
                />
              </Grid>
            </Grid>
            <Grid className="viewField" container xs={12} spacing={3}>
              <Grid item xs={12} md={4} direction={"row"} spacing={2}>
                <Typography sx={{ whiteSpace: "nowrap" }}>Last Name</Typography>
              </Grid>
              <Grid item xs={12} md={4} direction={"row"} spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  fullWidth
                  disabled={false}
                  // value={formik.values.lastName}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // error={
                  //   formik.touched.lastName && formik.errors.lastName
                  //     ? true
                  //     : false
                  // }
                  // helperText={
                  //   formik.touched.lastName && formik.errors.lastName
                  //     ? formik.errors.lastName
                  //     : ""
                  // }
                />
              </Grid>
            </Grid>
            <Grid className="viewField" container xs={12} spacing={3}>
              <Grid item xs={12} md={4} direction={"row"} spacing={2}>
                <Typography sx={{ whiteSpace: "nowrap" }}>
                  Phone Number
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} direction={"row"} spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  name="phone"
                  fullWidth
                  disabled={false}
                  // value={formik.values.phone}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // error={
                  //   formik.touched.phone && formik.errors.phone
                  //     ? true
                  //     : false
                  // }
                  // helperText={
                  //   formik.touched.phone && formik.errors.phone
                  //     ? formik.errors.phone
                  //     : ""
                  // }
                />
              </Grid>
            </Grid>
            <Grid className="viewField" container xs={12} spacing={3}>
              <Grid item xs={12} md={4} direction={"row"} spacing={2}>
                <Typography sx={{ whiteSpace: "nowrap" }}>Email</Typography>
              </Grid>
              <Grid item xs={12} md={4} direction={"row"} spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  fullWidth
                  disabled={false}
                  // value={formik.values.phone}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // error={
                  //   formik.touched.phone && formik.errors.phone
                  //     ? true
                  //     : false
                  // }
                  // helperText={
                  //   formik.touched.phone && formik.errors.phone
                  //     ? formik.errors.phone
                  //     : ""
                  // }
                />
              </Grid>
            </Grid>

            <Grid
              sx={{
                justifyContent: "center",
                display: "flex",
                marginTop: "1rem",
              }}
            >
              <Button
                type="submit"
                onClick={handleOpen}
                // onHandleClick={formik.handleSubmit}
                variant="outline"
                sx={{
                  backgroundColor: "black",
                  marginBottom: "0.5rem",

                  textAlign: "center",
                  color: "white",

                  ":hover": {
                    bgcolor: "white",
                    color: "black",
                  },
                }}
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <BasicModal isOpen={showModal} onClose={handleClose} />
    </Stack>
  );
};

export default EditDetailsScreen;
