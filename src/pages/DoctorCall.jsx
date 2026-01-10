import { useEffect, useRef, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import DoctorLayout from "../layouts/DoctorLayout";

function DoctorCall() {
  const videoRef = useRef(null);
  const zegoContainerRef = useRef(null);
  const zegoRef = useRef(null);

  const [doctorName] = useState("Dr. Liam Michael");
  const [stream, setStream] = useState(null);
  const [cameraOn, setCameraOn] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [joined, setJoined] = useState(false);
  const [timeLeft, setTimeLeft] = useState(12 * 60 + 36); // 12m 36s

  /* ⏱ Timer */
  useEffect(() => {
    if (joined || timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft(p => p - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft, joined]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}m ${sec}s`;
  };

  /* 🎥 Preview */
  useEffect(() => {
    if (joined) return;

    let localStream;
    (async () => {
      try {
        localStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        setStream(localStream);
        if (videoRef.current) {
          videoRef.current.srcObject = localStream;
        }
      } catch (error) {
        console.error("Error accessing media devices:", error);
      }
    })();

    return () => {
      localStream?.getTracks().forEach(t => t.stop());
    };
  }, [joined]);

  /* 🎛 Controls */
  const toggleCamera = () => {
    if (!stream) return;
    const t = stream.getVideoTracks()[0];
    t.enabled = !t.enabled;
    setCameraOn(t.enabled);
  };

  const toggleMic = () => {
    if (!stream) return;
    const t = stream.getAudioTracks()[0];
    t.enabled = !t.enabled;
    setMicOn(t.enabled);
  };

  /* 🎬 Join Zego */
  useEffect(() => {
    if (!joined || !zegoContainerRef.current) return;

    stream?.getTracks().forEach(t => t.stop());

    const appID = 25163729;
    const serverSecret = "cf727691348ae365922757f5005e2141";

    const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      "amrutam-room-001",
      Date.now().toString(),
      doctorName
    );

    zegoRef.current = ZegoUIKitPrebuilt.create(token);

    zegoRef.current.joinRoom({
      container: zegoContainerRef.current,
      scenario: { mode: ZegoUIKitPrebuilt.OneONoneCall },
      turnOnCameraWhenJoining: cameraOn,
      turnOnMicrophoneWhenJoining: micOn,
      onLeaveRoom: () => {
        zegoRef.current?.destroy();
        zegoRef.current = null;
        setJoined(false);
      },
    });
  }, [joined, cameraOn, micOn, doctorName]);

  // Cleanup on unmount
  useEffect(() => {
    return () => zegoRef.current?.destroy();
  }, []);

  return (
    <DoctorLayout>
      <div style={styles.page}>
        {!joined ? (
          <>
            {/* ⏱ TIMER */}
            <div style={styles.timer}>
              Time Remaining: {formatTime(timeLeft)}
            </div>

            {/* 🎛 CONTROLS */}
            <div style={styles.controls}>
              <button
                onClick={toggleCamera}
                style={{
                  ...styles.controlBtn,
                  background: cameraOn ? "#4a7c59" : "#ef4444",
                  color: "white",
                  border: "none",
                }}
              >
                {cameraOn ? "Turn off Camera" : "Turn on Camera"}
              </button>

              <button
                onClick={toggleMic}
                style={{
                  ...styles.controlBtn,
                  background: micOn ? "#4a7c59" : "#ef4444",
                  color: "white",
                  border: "none",
                }}
              >
                {micOn ? "Turn off Audio" : "Turn on Audio"}
              </button>
            </div>

            {/* 🎥 PREVIEW */}
            <div style={styles.videoBox}>
              {cameraOn ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  style={styles.video}
                />
              ) : (
                <div style={styles.cameraOff}>📷 Camera Off</div>
              )}
              {!micOn && <div style={styles.muted}>🔇 Muted</div>}
            </div>

            {/* ▶ JOIN */}
            <button style={styles.joinBtn} onClick={() => setJoined(true)}>
              Join Call
            </button>
          </>
        ) : (
          <div ref={zegoContainerRef} style={styles.videoBoxZego} />
        )}
      </div>
    </DoctorLayout>
  );
}

/* 🎨 Styles */
const styles = {
  page: {
    paddingTop: "0px",
    marginTop: "0px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  timer: {
    marginTop: "0px",
    paddingTop:"0px",
    marginBottom: "20px",
    color: "#666",
    fontWeight: "600",
    fontSize: "16px",
  },
  controls: {
    display: "flex",
    gap: "16px",
    marginBottom: "24px",
  },
  controlBtn: {
    padding: "10px 18px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "14px",
    transition: "all 0.2s ease",
  },
  videoBox: {
    width: "540px",
    height: "340px",
    borderRadius: "16px",
    background: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: "24px",
    position: "relative",
  },
  videoBoxZego: {
    width: "640px",
    height: "328px",
    borderRadius: "16px",
    background: "#111",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: "24px",
    position: "relative",
  },
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cameraOff: {
    color: "#fff",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  muted: {
    position: "absolute",
    bottom: "12px",
    right: "12px",
    background: "rgba(0,0,0,0.7)",
    color: "#fff",
    padding: "6px 10px",
    borderRadius: "14px",
    fontSize: "12px",
  },
  joinBtn: {
    padding: "12px 28px",
    background: "#4a7c59",
    color: "white",
    borderRadius: "6px",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.2s ease",
  },
};

export default DoctorCall;
