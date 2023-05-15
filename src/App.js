import { Toaster } from "react-hot-toast";
import "./App.css";
import Routes from "./Router/Routes";

function App() {
  return (
    <div className="">
      <Routes></Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
