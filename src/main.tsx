import { createRoot } from "react-dom/client";
import GlobalProvider from "@/lib/global/GlobalProvider.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
);
