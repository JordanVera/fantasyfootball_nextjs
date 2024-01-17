import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import AuthService from '@/services/AuthService';

const WebcamCapture = ({ onboarding, setOnboarding }) => {
  const webcamRef = useRef(null);
  const imagesRef = useRef([]);

  const CAPTURE_INTERVAL = 1_000; // Capture an image every 1000 ms (1 second)
  const TOTAL_CAPTURE_TIME = 10_000; // Total time for capturing images (10 seconds)

  useEffect(() => {
    if (onboarding) {
      const interval = setInterval(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
          imagesRef.current.push(imageSrc);
        }
      }, CAPTURE_INTERVAL); // Capture an image every 1000 ms (1 second)

      // Set a timeout to end the onboarding process
      const timeout = setTimeout(() => {
        clearInterval(interval);
        sendImagesToBackend(imagesRef.current); // Send images stored in ref
        imagesRef.current = []; // Reset the images ref
        setOnboarding(false); // End the onboarding process
      }, TOTAL_CAPTURE_TIME); // Total time for capturing images (10 seconds)

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [onboarding, setOnboarding]);

  const sendImagesToBackend = async (imagesArray) => {
    console.log(await imagesArray);
    try {
      await AuthService.recognize(imagesArray);
    } catch (error) {
      console.error('Error sending images to backend:', error);
    }
  };

  if (!onboarding) {
    return null; // Don't render the webcam if not in onboarding mode
  }

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <p>Onboarding in progress...</p>
    </div>
  );
};

export default WebcamCapture;
