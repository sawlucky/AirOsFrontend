import { useState } from "react";

const YouTubeLiveDashboard = () => {
  const [isLive, setIsLive] = useState(false);
  const [streamKey, setStreamKey] = useState("");

  // IMPORTANT SECURITY NOTE:
  // In a real application, NEVER hardcode or expose stream keys in frontend code.
  // This is for demonstration only. In production, always fetch keys from a backend.
  const DEMO_STREAM_KEY = "vjgc-z3ud-ugv0-mcdy-7gvd"; // Example key - replace with yours

  const startStream = () => {
    setStreamKey(DEMO_STREAM_KEY);
    setIsLive(true);
  };

  const stopStream = () => {
    setIsLive(false);
    setStreamKey("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h2>YouTube Live Control Panel</h2>

      {!isLive ? (
        <button
          onClick={startStream}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff0000",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Start Streaming
        </button>
      ) : (
        <>
          <button
            onClick={stopStream}
            style={{
              padding: "10px 20px",
              backgroundColor: "#333",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              marginRight: "10px",
            }}
          >
            Stop Streaming
          </button>

          <div
            style={{
              marginTop: "20px",
              background: "#f5f5f5",
              padding: "15px",
              borderRadius: "4px",
            }}
          >
            <p>
              <strong>Stream URL:</strong>{" "}
              <code>rtmp://a.rtmp.youtube.com/live2</code>
            </p>
            <p>
              <strong>Stream Key:</strong> <code>{streamKey}</code>
            </p>
            <p style={{ color: "#ff0000", marginTop: "10px" }}>
              ⚠️ Warning: Never expose stream keys in production code!
            </p>
          </div>
        </>
      )}

      <div style={{ marginTop: "30px" }}>
        <h3>Live Stream Preview</h3>
        <iframe 
  src="https://www.youtube.com/embed/-Ma5iWRcShA?autoplay=1" 
  width="100%" 
  height="500"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
      </div>
    </div>
  );
};

export default YouTubeLiveDashboard;
