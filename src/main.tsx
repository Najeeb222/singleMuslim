import { createRoot } from "react-dom/client";
import App from "./core/App/App";
import "./styles/_common.css";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
<BrowserRouter>
<App />
</BrowserRouter>
  

);
