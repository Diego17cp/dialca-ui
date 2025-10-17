import { createRoot } from "react-dom/client";
import "../src/styles/tw.css";
import "../src/styles/dialca-ui.css";
import "../src/styles/components/input-field.css";
import "../src/styles/components/button.css";
import "../src/styles/components/loader.css";
import "../src/styles/components/radio-input.css";
import "../src/styles/components/checkbox.css";
import "../src/styles/components/switch.css";
import "../src/styles/components/textarea.css";
import "../src/styles/components/circle-char-counter.css";
import "../src/styles/components/select.css";
import "../src/styles/components/searchable-select.css";
import "../src/styles/components/modal.css";
import "../src/styles/components/dropzone.css";

import { App } from "./App";

createRoot(document.getElementById("root")).render(<App />);