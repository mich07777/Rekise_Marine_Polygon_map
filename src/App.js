import React, { useState } from "react";
import MapComponent from "./components/MapComponent";
import ModalComponent from "./components/ModalComponent";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coordinates, setCoordinates] = useState([]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={handleModalOpen}>View Coordinates</button>
      <MapComponent onCoordinatesUpdate={setCoordinates} />
      <ModalComponent
        open={isModalOpen}
        onClose={handleModalClose}
        data={coordinates}
      />
    </div>
  );
};

export default App;
