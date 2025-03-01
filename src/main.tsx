import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { viteRootElement } from "~utils";
import { App } from "./App";

createRoot(viteRootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);
