import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import MapComponent from "./components/MapComponent";
import ModalComponent from "./components/ModalComponent";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coordinates, setCoordinates] = useState([]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Map Drawing Application
      </Typography>
      <Typography variant="body1" gutterBottom>
        Use the buttons below to draw LineStrings or Polygons on the map. You can view the coordinates by clicking the "View Coordinates" button.
      </Typography>
      <Box sx={{ marginBottom: 2 }}>
        <Button variant="contained" color="primary" onClick={handleModalOpen} sx={{ marginRight: 2 }}>
          View Coordinates
        </Button>
      </Box>
      <MapComponent onCoordinatesUpdate={setCoordinates} />
      <ModalComponent
        open={isModalOpen}
        onClose={handleModalClose}
        data={coordinates}
      />
    </Box>
  );
};

export default App;
