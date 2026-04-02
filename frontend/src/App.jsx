import { useState } from "react";
import FileUpload from "./components/FileUpload";
import Navigator from "./components/Navigator";
import "./App.css";

function App() {
  const [urls, setUrls] = useState([]);

  return (
    <div className="app">
      
      <div className="header">
        <h2>🌐 Website Navigator</h2>
      </div>

      <div className="content">
            {urls.length > 0 ? (
              <Navigator urls={urls} />
            ) : (
              <p className="placeholder">
                <FileUpload setUrls={setUrls} />
                Upload a file to start navigating websites
              </p>
            )}

      </div>

    </div>
  );
}

export default App;