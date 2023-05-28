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

const ProfileDetailScreen = ({ viewProfile, setProfile }) => {
  const [showModal, setshowModal] = useState(false);
  const nav = useNavigate();
  const empData = [
    { name: " First Name", value: "Harry" },
    { name: "Last Name", value: "Portor" },

    { name: "Email", value: "harry@gmail.com" },
    {
      name: "Phone",
      value: 543267523,
    },
  ];

  return (
    <Stack px={5} spacing={3}>
      <Card sx={{ width: "100%" }} elevation={3}>
        <CardHeader
          action={
            <Fab
              onClick={() => setProfile(!viewProfile)}
              sx={{ backgroundColor: "black", color: "white" }}
              aria-label="edit"
            >
              <EditIcon />
            </Fab>
          }
          title="Personal Details"
        ></CardHeader>
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
                  placeholder="Asad"
                  variant="outlined"
                  fullWidth
                  disabled={true}
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
                  placeholder="Shiekh"
                  variant="outlined"
                  fullWidth
                  disabled={true}
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
                  placeholder="92 306 1284860"
                  variant="outlined"
                  fullWidth
                  disabled={true}
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
                  placeholder="asad@gmail.com"
                  variant="outlined"
                  fullWidth
                  disabled={true}
                />
              </Grid>
            </Grid>
            {/* <Button
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
                >
                  Save Changes
                </Button> */}
          </Grid>
        </CardContent>
      </Card>
      <BasicModal isOpen={showModal} onClose={() => setshowModal(false)} />
    </Stack>
  );
};

export default ProfileDetailScreen;
