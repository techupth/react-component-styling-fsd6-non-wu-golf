import "./App.css";
import Button from "./components/Button.jsx";
import Alert from "./components/Alert.jsx";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button order="Primary" />
        <br />
        <Button order="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert message="error" />
        <Alert message="warning" />
        <Alert message="info" />
        <Alert message="success" />
      </div>
    </div>
  );
}

export default App;
