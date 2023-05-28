import { Button, Chip, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { convertZuluToGMT } from "../../../common/ConversionFunctions";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useDispatch } from "react-redux";
import { blockAuthor } from "../../../store/autorization/actions";

const DataTableComponent = ({ authors }) => {
  const dispatch = useDispatch();
  const [usersList, setUsersList] = useState();
  const handleApprove = (id) => {
    console.log("id", id);
  };
  const handleBlock = (id) => {
    console.log("🚀 ~ file: DataTableComponent.jsx:18 ~ handleBlock ~ id:", id);
    const payload = {
      userId: id?.id,
    };
    dispatch(blockAuthor(payload));
  };
  useEffect(() => {
    if (authors) {
      const t = authors?.map((item) => {
        return {
          id: `${item?.id}`,
          name: item.displayName,
          joinDate: `${convertZuluToGMT(item?.createdAt)}`,
          status: item?.role,
          posts: item?.Posts?.length,
        };
      });
      setUsersList(t);
    }
  }, [authors]);
  let data = usersList;
  const columns = [
    {
      name: (
        <Typography fontSize={"1.2em"} fontWeight={"bold"}>
          ID
        </Typography>
      ),
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: (
        <Typography fontSize={"1.2em"} fontWeight={"bold"}>
          Name
        </Typography>
      ),
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: (
        <Typography fontSize={"1.2em"} fontWeight={"bold"}>
          Role
        </Typography>
      ),
      selector: (row) => {
        return (
          <Chip
            label={row.status}
            color={row.status === "Author" ? "primary" : "warning"}
          />
        );
      },
      sortable: true,
    },
    {
      name: (
        <Typography fontSize={"1.2em"} fontWeight={"bold"} minWidth="6em">
          No.Of Posts
        </Typography>
      ),
      selector: (row) => row.posts,
      sortable: true,
    },
    {
      name: (
        <Typography fontSize={"1.2em"} fontWeight={"bold"}>
          Created At
        </Typography>
      ),
      selector: (row) => row.joinDate,
      sortable: true,
    },
    {
      name: (
        <Typography fontSize={"1.2em"} fontWeight={"bold"}>
          Actions
        </Typography>
      ),
      cell: (id) => {
        return (
          <Stack direction={"row"}>
            <Stack>
              <IconButton
                onClick={() => handleApprove(id)}
                sx={{ color: "blue" }}
              >
                <CheckCircleOutlineIcon />
              </IconButton>
            </Stack>
            <Stack>
              <IconButton sx={{ color: "red" }} onClick={() => handleBlock(id)}>
                <DoNotDisturbAltIcon />
              </IconButton>
            </Stack>
          </Stack>
        );
      },
    },
  ];
  return <DataTable columns={columns} data={data} pagination />;
};

export default DataTableComponent;
