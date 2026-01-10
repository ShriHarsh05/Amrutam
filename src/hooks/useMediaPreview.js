import { useEffect, useRef, useState } from "react";

export function useMediaPreview() {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  const startPreview = async () => {
    try {
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setStream(newStream);

      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
    } catch (err) {
      console.error("Media access denied", err);
    }
  };

  const stopPreview = () => {
    stream?.getTracks().forEach(track => track.stop());
  };

  // Start preview on mount
  useEffect(() => {
    startPreview();
    return stopPreview;
  }, []);

  // Keep stream attached if ref changes
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return {
    videoRef,
    stream,
    startPreview,
    stopPreview,
  };
}
