import { useEffect } from "react";
import "./App.css";

function App() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="app-container">

      <div className="header">
        <h1>Hablar con Asistente AI</h1>
      </div>

      <elevenlabs-convai agent-id="agent_7201kkw6kcznetma1taa9c70g7wr"></elevenlabs-convai>

    </div>
  );
}

export default App;