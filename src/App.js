import { Css } from "./component/Css";
import { Html } from "./component/Html";
import { Java } from "./component/Java";
import { Reactjs } from "./component/Reactjs";
import "./component/Style.css";
function App() {
  return (
    <div className="main">
      <Html />
      <Css />
      <Java />
      <Reactjs />
    </div>
  );
}

export default App;
