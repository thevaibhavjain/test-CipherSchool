import React, { useState, useEffect } from 'react';
import './CameraPreview.css'
const CameraPreview = () => {
  const [permissionsGranted, setPermissionsGranted] = useState({
    camera: false,
    microphone: false,
  });
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const requestPermissions = async () => {
      try {
        // Requests both camera and microphone permissions
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setStream(stream);
        setPermissionsGranted({ camera: true, microphone: true });
      } catch (error) {
        setPermissionsGranted({ camera: false, microphone: false });
        alert('Camera and microphone permissions are required to start the test.');
      }
    };

    requestPermissions();
  }, []);

  return (
    <div >
      {permissionsGranted.camera && permissionsGranted.microphone ? (
        <div className="preview-container">
        <video autoPlay ref={(video) => video && stream && (video.srcObject = stream)} />
        </div>
      ) : (
        <p>Camera and microphone permissions are required to start the test. Please allow them.</p>
      )}
    </div>
  );
};


export default CameraPreview;
