import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";

export default function FileUpload({ setUrls }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData
      );

      setUrls(res.data.urls);
    } catch (err) {
      setError("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2>📂 Upload File</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="file-input"
      />

      {/* {file && <p className="file-name">Selected: {file.name}</p>} */}

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>

      {error && <p className="error">{error}</p>}
    </div>
  );
}