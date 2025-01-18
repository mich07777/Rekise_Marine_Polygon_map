import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const ModalComponent = ({ open, onClose, data }) => (
  <Modal open={open} onClose={onClose}>
    <Box
      sx={{
        width: 400,
        margin: "auto",
        padding: 4,
        background: "white",
        borderRadius: "8px",
      }}
    >
      <h2>Coordinates</h2>
      <ul>
        {data.map((coord, index) => (
          <li key={index}>
            WP({index.toString().padStart(2, "0")}): {coord.join(", ")}
          </li>
        ))}
      </ul>
    </Box>
  </Modal>
);

export default ModalComponent;
