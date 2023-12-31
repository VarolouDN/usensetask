import { useState } from "react";
import "./App.css";
import { useValidation } from "./hooks/useValidation";

function App() {
  const [value, setValue] = useState("");

  const passValue = useValidation(value);

  function addColor(a, b, c) {
    let result = `section ${passValue === "short" ? "shortPass" : ""} ${
      passValue === "easy" ? a : ""
    } 
        ${passValue === "medium" ? b : ""} ${passValue === "strong" ? c : ""}`;
    return result;
  }

  function onChangeHandler(e) {
    setValue(e.target.value);
  }
  return (
    <div className="app">
      <form className="form">
        <input value={value} onChange={onChangeHandler} type="password" />
      </form>
      <div className="sections">
        <div className={addColor("red", "yellow", "green")}>
          the password is easy
        </div>

        <div className={addColor("grey", "yellow", "green")}>
          the password is medium
        </div>

        <div className={addColor("grey", "grey", "green")}>
          the password is strong
        </div>
      </div>
    </div>
  );
}

export default App;
