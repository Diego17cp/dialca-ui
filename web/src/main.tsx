import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/core/theme/index.css";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
