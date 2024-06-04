import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button style="primary" />
        <Button style="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert status="error" text="This is error alert box" />
        <Alert status="warning" text="This is warning alert box" />
        <Alert status="info" text="This is info alert box" />
        <Alert status="success" text="This is success alert box" />
      </div>
    </div>
  );
}

export default App;
