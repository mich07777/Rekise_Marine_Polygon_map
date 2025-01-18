import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { OSM } from "ol/source";
import { Draw } from "ol/interaction";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";

const MapComponent = ({ onCoordinatesUpdate }) => {
  useEffect(() => {
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({ source: vectorSource });

    const map = new Map({
      target: "map-container",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    const addDrawInteraction = (type) => {
      const draw = new Draw({
        source: vectorSource,
        type,
      });

      draw.on("drawend", (event) => {
        const coords = event.feature.getGeometry().getCoordinates();
        console.log("New Coordinates:", coords);
        if (onCoordinatesUpdate) {
          onCoordinatesUpdate(coords);
        }
      });

      map.addInteraction(draw);
    };

    const handleDrawLineString = () => addDrawInteraction("LineString");
    const handleDrawPolygon = () => addDrawInteraction("Polygon");

    document.getElementById("draw-linestring").onclick = handleDrawLineString;
    document.getElementById("draw-polygon").onclick = handleDrawPolygon;

    return () => map.setTarget(null);
  }, [onCoordinatesUpdate]);

  return (
    <Box>
      <Box sx={{ marginBottom: 2 }}>
        <Button id="draw-linestring" variant="outlined" color="primary" sx={{ marginRight: 2 }}>
          Draw LineString
        </Button>
        <Button id="draw-polygon" variant="outlined" color="secondary">
          Draw Polygon
        </Button>
      </Box>
      <div id="map-container" style={{ width: "100%", height: "500px", border: "1px solid #ccc" }}></div>
    </Box>
  );
};

export default MapComponent;
