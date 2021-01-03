import * as React from "react";
import { render } from "react-dom";
import DataType from "./pages/dataType/datatype";

const APP = () => <DataType />;

render(<APP />, window.document.getElementById("app"));
