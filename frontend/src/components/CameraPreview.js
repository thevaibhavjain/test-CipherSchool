import React, { useState, useEffect } from 'react';

const CameraPreview = () => {
  const [cameraPermission, setCameraPermission] = useState(false);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const requestCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(stream);
        setCameraPermission(true);
      } catch (error) {
        setCameraPermission(false);
        alert('Camera permission is required to start the test.');
      }
    };

    requestCameraPermission();
  }, []);

  return (
    <div>
      {cameraPermission ? (
        <video autoPlay ref={(video) => video && stream && (video.srcObject = stream)} />
      ) : (
        <p>Camera permission denied.</p>
      )}
    </div>
  );
};

export default CameraPreview;
