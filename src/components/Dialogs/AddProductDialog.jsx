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
import MuiPhoneNumber from "material-ui-phone-number";

const AddProductDialog = (props) => {
  const { open, setOpen } = props;

  const [brand, setBrand] = React.useState("");
  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [productUrl, setProductUrl] = React.useState("");
  const [scanUrl, setScanUrl] = React.useState("");
  const [regex, setRegex] = React.useState("");
  const [negateRegex, setNegateRegex] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleSubmit = () => {
    const product = {
      brand,
      name,
      imageUrl,
      productUrl,
      scanUrl,
      regex,
      negateRegex,
      phoneNumber,
    };
    alert("Product: " + JSON.stringify(product));
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Add Product</DialogTitle>
      <DialogContent>
        <div style={{ width: "350px", margin: "auto" }}>
          <FormControl sx={{ width: 350, paddingBottom: "10px" }}>
            <div
              style={{
                padding: "10px 0px 0px 0px",
              }}
            >
              <TextField
                sx={{ width: 350 }}
                label="Brand"
                value={brand}
                onChange={(e) => {
                  setBrand(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                padding: "10px 0px 0px 0px",
              }}
            >
              <TextField
                sx={{ width: 350 }}
                label="Product Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                padding: "10px 0px 0px 0px",
              }}
            >
              <TextField
                sx={{ width: 350 }}
                label="Image URL"
                value={imageUrl}
                onChange={(e) => {
                  setImageUrl(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                padding: "10px 0px 0px 0px",
              }}
            >
              <TextField
                sx={{ width: 350 }}
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
                sx={{ width: 350 }}
                label="Scan URL"
                value={scanUrl}
                onChange={(e) => {
                  setScanUrl(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                padding: "10px 0px 0px 0px",
              }}
            >
              <TextField
                sx={{ width: 350 }}
                label="Regex"
                multiline
                rows={4}
                value={regex}
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
                  width: 350,
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
                padding: "10px 0px 0px 0px",
              }}
            >
              <MuiPhoneNumber
                sx={{ width: 350 }}
                variant="outlined"
                label="Contact Number"
                defaultCountry="us"
                onChange={(value) => {
                  setPhoneNumber(value);
                }}
              />
            </div>
            <div
              style={{
                padding: "10px 0px 0px 0px",
              }}
            >
              <Button
                sx={{ width: 350 }}
                variant="outlined"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </FormControl>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};
export default AddProductDialog;
