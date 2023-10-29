import { useEffect, useRef, useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import * as faceapi from "face-api.js";
import SearchRecords from "./SearchRecords";
import { saveSearchResults } from "../../Features/offender/OffenderSlice";
import { useDispatch } from "react-redux";

const baseUrl = "http://localhost:3000/api/record";

const FaceRecognitionComponent = () => {
  const imageUploadRef = useRef(null);
  const canvasRef = useRef(null);

  const [matchingLabels, setMatchingLabels] = useState([]);
  const dispatch = useDispatch();

  const loadModels = async () => {
    await faceapi.nets.faceRecognitionNet.loadFromUri("/models");
    await faceapi.nets.faceLandmark68Net.loadFromUri("/models");
    await faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
  };

  useEffect(() => {
    loadModels();
    console.log("Models loaded");
  }, []);

  useEffect(() => {
    // Check if matchingLabels is not empty and the first element contains a space
    if (matchingLabels.length > 0) {
      const wordsArray = matchingLabels[0].split(" ");

      axios
        .get(`${baseUrl}/search/${wordsArray[0]}`)
        .then((response) => {
          console.log("image Found: ", response.data.data);
          dispatch(saveSearchResults(response.data.data)); // Dispatch your action to save search results
        })
        .catch((err) =>
          console.log("Error occurred", err.response.data.message)
        );
    }
  }, [matchingLabels, dispatch]);

  const handleImageUpload = async () => {
    setMatchingLabels([]);

    const image = imageUploadRef.current.files[0];

    if (!image) {
      return;
    }

    const img = await faceapi.bufferToImage(image);
    const canvas = canvasRef.current;

    const labeledFaceDescriptors = await loadLabeledImages();

    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.5);

    const displaySize = {
      width: img.width,
      height: img.height,
    };
    faceapi.matchDimensions(canvas, displaySize);

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, displaySize.width, displaySize.height);

    canvas.willReadFrequently = true;

    const detections = await faceapi
      .detectAllFaces(img)
      .withFaceLandmarks()
      .withFaceDescriptors();

    const descriptions = [];
    console.log("descriptions", descriptions);
    detections.forEach((detection) => {
      const descriptor = detection.descriptor;
      descriptions.push(descriptor);
    });

    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    const results = resizedDetections.map((d) =>
      faceMatcher.findBestMatch(d.descriptor)
    );
    results.forEach((result, i) => {
      const box = resizedDetections[i].detection.box;
      const drawBox = new faceapi.draw.DrawBox(box, {
        label: result.toString(),
      });
      drawBox.draw(canvas);
    });

    const labels = results.map((result) => result.toString());

    setMatchingLabels(labels);
  };

  async function loadLabeledImages() {
    try {
      const response = await axios.get(`${baseUrl}/imageslist`);
      const fetchedImagesList = response.data;

      const labeledFaceDescriptors = await Promise.all(
        fetchedImagesList.map(async (label) => {
          const descriptions = [];

          const img = await faceapi.fetchImage(
            `http://localhost:3000/api/uploads/${label}`
          );

          const detections = await faceapi
            .detectSingleFace(img)
            .withFaceLandmarks()
            .withFaceDescriptor();

          if (detections) {
            descriptions.push(detections.descriptor);
          } else {
            console.error("No face detected in image");
          }

          return new faceapi.LabeledFaceDescriptors(label, descriptions);
        })
      );

      return labeledFaceDescriptors;
    } catch (error) {
      console.error("Error loading labeled images", error);
      return [];
    }
  }

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <label htmlFor="fileInput" className="custom-file-input">
        Image Recognition
      </label>

      <input
        style={{
          margin: "10px 0 20px 0",
          width: "200px",
          fontSize: "16px",
          border: " 1px solid #ccc",
          padding: "5px 20px",
          borderRadius: "10px",
          backgroundColor: "none",
          id: "fileInput",
          class: "hidden-input",
        }}
        type="file"
        accept=".png, .jpg, .jpeg"
        name="imageUpload"
        id="imageUpload"
        ref={imageUploadRef}
        onChange={handleImageUpload}
      />

      {/* Conditional rendering of the spinner */}
      {matchingLabels.length === 0 && imageUploadRef.current != null && (
        <CircularProgress size={25} />
      )}

      <div>
        <canvas
          ref={canvasRef}
          id="overlayCanvas"
          style={{
            position: "relative",
            width: "250px",
            height: "250px",
            overflow: "hidden",
          }}
        ></canvas>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Matching Images:</h2>
        <ul>
          {matchingLabels.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>
      </div>
      <div
        style={{
          // backgroundColor: "#273576",
          border: "1px solid grey",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <SearchRecords />
      </div>
    </div>
  );
};

export default FaceRecognitionComponent;
