import { useState } from "react";
import FileUpload from "./components/FileUpload";
import Navigator from "./components/Navigator";
import "./App.css";

function App() {
  const [urls, setUrls] = useState([]);

  return (
    <div className="app">
      
      <div className="header">
        <h2>🌐 WEBSITE NAVIGATOR 🚀</h2>
      </div>

      <div className="content">
        {urls.length > 0 ? (
          <Navigator urls={urls} />
        ) : (
          <div className="placeholder">

            

            <div className="upload-car">
              <FileUpload setUrls={setUrls} />
              
            </div>

            

          </div>
        )}
      </div>

    </div>
  );
}

export default App;