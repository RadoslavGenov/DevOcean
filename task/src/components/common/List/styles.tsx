import styled from "styled-components";

export const Title = styled.p`
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    justifyContent: center;
    flex: ${({ flex }: { flex: number }) => flex};
    color: rgb(148,91,126);
    font-family: Roboto;
    font-weight: bold;
`;

export const StyledList = styled.div`
    padding: 5px;
    justify-content: center;
`;

