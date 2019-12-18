import styled from "styled-components";

interface IImageProps {
    width?: string;
    height?: string;
}

const padding = (px: string) => `
    padding-right: ${px}px;
    padding-left: ${px}px;
    padding-bottom: ${px}px;
`;

const Container = styled.div`
    background-color: rgb(233,233,233);
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: Roboto;
`;

const ImageContainer = styled.div`
    padding-top: 40px;
    padding-right: 40px;
    padding-left: 40px;
`;

const Image: any = styled.img<IImageProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

const BottomContainer = styled.div`
    flex-grow: 1;
    flex: 5;
    display: flex;
    margin-top: 30px;
    margin-bottom: 60px;
    margin-right: 90px;
    margin-left: 90px;
`;

const Address = styled.div`
    ${padding("20")}
    flex: 1;
`;

const Contact: any = styled.div`;
    ${padding("20")}
    flex: 1;
`;

const Nearby: any = styled.div`;
    flex: 3;
    background-color: white;
    ${padding("20")}
`;

const Title = styled.p`;
    font-size: 25px;
    ${padding("20")}
    padding-top: 10px;
    color: rgb(30, 30, 30);
`;

const Description = styled.p`;
    font-size: 16px;
    font-weight: light;
    color: dimgrey;
    padding-left: 20px;
`;

export default { Description, Address, BottomContainer, Contact, Container, Image, ImageContainer, Nearby, Title };
