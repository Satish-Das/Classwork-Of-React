import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import ApiTesting from "./lecture16_01/useeffectexer";
import UserContextFinal from "./lecture30_01_25/useContext3";
// import Wrapper from "./lecture15_01/Wrapper";
// import MyComponent from './comp1';
// import StateExample from './lec26_12/stateExam1'
// import StateMerge from './lec26_12/stateMerge'
// import PropExample from './lec27_12/propexam1'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextFinal />
  </StrictMode>
);
