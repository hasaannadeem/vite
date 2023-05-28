import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/post/actions";
const Editor = () => {
  const editorConfig = {
    // CKEditor configuration options
    toolbar: [
      "bold",
      "italic",
      "underline",
      "bulletedList",
      "numberedList",
      "link", // Add a link button
      "image", // Add an image button
      "blockQuote",
    ],
    styles: [
      // Custom styles
      { data: "Padding 10px", element: "p", styles: { padding: "100px" } },
      { data: "Padding 20px", element: "p", styles: { padding: "200px" } },
    ],
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(createPost());
  };
  return (
    <>
      <Container sx={{ minHeight: "100vh" }}>
        <Grid>
          <Typography mb={3} mt={3} variant="h5">
            Add Your Story{" "}
          </Typography>
          <div>
            <CKEditor
              editor={ClassicEditor}
              config={editorConfig}
              data="<p>CKEditor
                      Tommy Hilfiger men striped pink sweatshirt. Crafted with
                      cotton. Material composition is 100% organic cotton.
                      This is one of the world’s leading designer lifestyle
                      brands and is internationally recognized for celebrating
                      the essence of classic American cool style, featuring
                      preppy with a twist designs.
                    </p>
                    <ul>
                      <li>Full Sleeve</li>
                      <li>Cotton</li>
                      <li>All Sizes available</li>
                      <li>4 Different Color</li>
                    </ul>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
              }}
            />
          </div>
        </Grid>
        <Stack
          mt={4}
          mb={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexDirection: "row",
          }}
        >
          <Button
            sx={{
              borderRadius: "25px",
              whiteSpace: "nowrap",
              color: "white",
              bgcolor: "black",
              ":hover": {
                bgcolor: "white",
                color: "red",
              },
            }}
          >
            Save
          </Button>
          <Button
            sx={{
              borderRadius: "25px",
              color: "white",
              bgcolor: "black",
              ":hover": {
                bgcolor: "white",
                color: "red",
              },
            }}
            onClick={() => handleSubmit()}
          >
            Publish
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Editor;
