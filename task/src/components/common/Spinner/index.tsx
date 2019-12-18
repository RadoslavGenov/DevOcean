import * as React from "react";
import { StyledSpinner } from "./styles";

export const Spinner = () => (
    <StyledSpinner viewBox="0 0 50 50" style={{
        position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
    }}>
        <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
        />
    </StyledSpinner >
);
