import styled from "styled-components";

export const LogoContainer = styled.div`
    justify-content: center;
    padding: 15px;
    display: flex;
`;

export const LogText = styled.p`
    color: ${(props) => props.color};
`;
