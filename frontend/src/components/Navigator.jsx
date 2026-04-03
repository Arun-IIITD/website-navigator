import { useState, useEffect } from "react";
import "./Navigator.css";

export default function Navigator({ urls }) {
  const [index, setIndex] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const [loading, setLoading] = useState(true);

  const getWebsiteName = (url) => {
  try {
    const hostname = new URL(url).hostname;

    return hostname
      .replace("www.", "")
      .split(".")[0]
      .toUpperCase();
  } catch {
    return "Unknown";
  }
};

  useEffect(() => {
    setBlocked(false);
    setLoading(true);
  }, [index]);

  if (!urls || urls.length === 0) {
    return <p className="empty">No URLs loaded</p>;
  }

  const currentUrl = urls[index];

  const blockedSites = ["google.com", "stackoverflow.com"];
  const isBlocked = blockedSites.some(site =>
    currentUrl.includes(site)
  );

  return (
    <div className="container">

      <div className="info">
        {getWebsiteName(currentUrl)}
      </div>

    

      <div className="frame-container">
        {loading && !isBlocked && <p className="loader">Loading...</p>}

        {!isBlocked && (
          <iframe
            src={currentUrl}
            title="website"
            className="iframe"
            onLoad={() => setLoading(false)}
            onError={() => {
              setBlocked(true);
              setLoading(false);
            }}
          />
        )}

        {(blocked || isBlocked) && (
          <div className="blocked">
            <p>🚫 This site cannot be displayed here.</p>
            <a href={currentUrl} target="_blank" rel="noreferrer">
              🔗 Open in New Tab
            </a>
          </div>
        )}
      </div>

      <div className="buttons">
        <button
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
        >
          ← Prev
        </button>

        <button
          onClick={() => setIndex(index + 1)}
          disabled={index === urls.length - 1}
        >
            Next →
        </button>
      </div>

      
    </div>
  );
}