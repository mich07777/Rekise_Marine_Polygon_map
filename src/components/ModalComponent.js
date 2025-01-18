import React from "react";
import { Modal, Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const ModalComponent = ({ open, onClose, data }) => (
  <Modal open={open} onClose={onClose}>
    <Box
      sx={{
        width: 400,
        margin: "auto",
        marginTop: "10%",
        padding: 4,
        background: "white",
        borderRadius: "8px",
        boxShadow: 24,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Coordinates
      </Typography>
      {data.length > 0 ? (
        <List>
          {data.map((coord, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`WP(${index.toString().padStart(2, "0")})`}
                secondary={`Coordinates: ${coord.join(", ")}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No coordinates to display.</Typography>
      )}
    </Box>
  </Modal>
);

export default ModalComponent;
