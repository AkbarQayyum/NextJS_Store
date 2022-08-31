import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:{md:600,xs:'80%'},
  bgcolor: "background.paper",
  boxShadow: "0px 0px 2px 2px  #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

export default function BasicModal({ state, changeState,num,setnum,sendData }) {

  return (
    <Modal
      open={state}
      onClose={changeState}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Enter Quantity
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <IconButton
            onClick={() => {
              setnum(++num);
            }}
            disabled={num >= 10 ? true : false}
          >
            <AddIcon />
          </IconButton>
          <TextField value={num} variant="outlined" />
          <IconButton
            onClick={() => {
              setnum(--num);
            }}
            disabled={num <= 0 ? true : false}
          >
            <RemoveIcon />
          </IconButton>
        </Box>
        <Box sx={{margin:'30px auto'}}>
            <Button onClick={sendData} variant='contained' sx={{width:'100%'}}>Add To Cart</Button>
        </Box>
      </Box>
    </Modal>
  );
}
