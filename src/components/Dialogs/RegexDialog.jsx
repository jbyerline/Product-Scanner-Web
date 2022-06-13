import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  TextField,
  Button,
  FormControl,
  Checkbox,
  Typography,
} from "@mui/material";

const RegexDialog = (props) => {
  const { open, setOpen } = props;
  const [pageContent, setPageContent] = React.useState("");
  const [productUrl, setProductUrl] = React.useState("");
  const [regex, setRegex] = React.useState("");
  const [negateRegex, setNegateRegex] = React.useState(false);

  const handleSubmit = () => {
    const product = {
      productUrl,
      regex,
      negateRegex,
    };
    alert("Product: " + JSON.stringify(product));
    // setOpen(false);
  };

  return (
    <Dialog
      maxWidth="xl"
      fullWidth={true}
      open={open}
      onClose={() => setOpen(false)}
    >
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <FormControl fullWidth={true} sx={{ paddingBottom: "10px" }}>
          <div
            style={{
              padding: "10px 0px 0px 0px",
            }}
          >
            <TextField
              sx={{ width: "100%" }}
              label="Product URL"
              value={productUrl}
              onChange={(e) => {
                setProductUrl(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              padding: "10px 0px 0px 0px",
            }}
          >
            <TextField
              sx={{ width: "100%" }}
              label="Regex"
              value={regex}
              multiline
              rows={4}
              onChange={(e) => {
                setRegex(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              padding: "10px 0px 0px 0px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>Negate Regex?</Typography>
              <Checkbox
                onChange={(e) => {
                  setNegateRegex(e.target.checked);
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 0px 0px 0px",
            }}
          >
            <Button
              sx={{ width: 200 }}
              variant="outlined"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
          <div
            style={{
              padding: "10px 0px 0px 0px",
            }}
          >
            <TextField
              sx={{ width: "100%" }}
              label="Page Content"
              value={pageContent}
              multiline
              rows={10}
              onChange={(e) => {
                setPageContent(e.target.value);
              }}
            />
          </div>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
export default RegexDialog;
