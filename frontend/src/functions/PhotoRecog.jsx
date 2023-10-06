import React, { useEffect, useState } from "react";
import { Input, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import axios from "axios";
import * as faceapi from "face-api.js"; // Import face-api.js

const baseUrl = "http://localhost:3000/api/record";

const PhotoRecog = () => {
  const [imagesList, setImagesList] = useState([]);
  const [uploadedImg, setUploadedImg] = useState("");
  const [matchingLabels, setMatchingLabels] = useState([]);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setUploadedImg(file);
  };

  const handleImageSearch = async () => {
    try {
      // Load the face-api.js models
      await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
      await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
      await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");

      // Fetch the list of image names
      const response = await axios.get(`${baseUrl}/imageslist`);
      const fetchedImagesList = response.data;

      // Load labeled images and descriptors
      const labeledFaceDescriptors = await loadLabeledImages(fetchedImagesList);
      const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.6);

      // Process the uploaded image
      const image = await faceapi.bufferToImage(uploadedImg);
      const canvas = faceapi.createCanvasFromMedia(image);
      const displaySize = { width: image.width, height: image.height };
      faceapi.matchDimensions(canvas, displaySize);
      const detections = await faceapi
        .detectAllFaces(image)
        .withFaceLandmarks()
        .withFaceDescriptors();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);
      const results = resizedDetections.map((d) =>
        faceMatcher.findBestMatch(d.descriptor)
      );

      // Filter matching labels
      const matchingLabels = results
        .filter((result) => result.label !== "unknown") // Filter out "unknown" labels
        .map((result) => result.label);

      console.log(matchingLabels);
      setMatchingLabels(matchingLabels);
    } catch (error) {
      console.error("Error occurred", error);
    }
  };

  async function loadLabeledImages(imageList) {
    return Promise.all(
      imageList.map(async (label) => {
        const descriptions = [];
        try {
          const img = await faceapi.fetchImage(
            `http://localhost:3000/api/uploads/${label}`
          );
          const detections = await faceapi
            .detectSingleFace(img)
            .withFaceLandmarks()
            .withFaceDescriptor();
          descriptions.push(detections.descriptor);
          // console.log("Descriptions:", descriptions);
          return new faceapi.LabeledFaceDescriptors(label, descriptions);
        } catch (error) {
          console.error("Error loading image for label", label, error);
          return null; // Handle the error gracefully, e.g., skip the image
        }
      })
    );
  }

  return (
    <div>
      <Input
        type="file"
        accept=".png, .jpg, .jpeg"
        name="uploadedImage"
        id="uploadedImage"
        onChange={handlePhotoUpload}
      />
      <IconButton onClick={handleImageSearch}>
        <Search />
      </IconButton>
      {matchingLabels.length > 0 && (
        <div>
          <p>Matching Labels:</p>
          <ul>
            {matchingLabels.map((label, index) => (
              <li key={index}>{label}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PhotoRecog;
