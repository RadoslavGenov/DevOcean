import * as React from "react";
import { LogoContainer } from "./styles";

export const withLogo = (ChildComponent: React.FC) => {
    return () => {
        return (
            <div>
                <LogoContainer>
                    &#x2903; LOGO
                </LogoContainer>
                <ChildComponent />
            </div>
        );
    };
};
