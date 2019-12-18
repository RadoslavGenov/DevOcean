import styled from "styled-components";

interface IHeadingProps {
    flex?: number;
    bgColor?: string;
}

export const Text: any = styled.div<IHeadingProps>`
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    justifyContent: center;
    flex: ${(props: any) => props.flex};
    font-family: Roboto;
    color: dimgrey;
`;

export const Container: any = styled.div<IHeadingProps>`
    display: flex;
    border-bottom: 2px solid lightgrey;
    background-color: ${(props: any) => props.bgColor};
`;
