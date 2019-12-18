import React from "react";
import uuid from "uuid";
import { IProps } from "../../../screens/HomeScreen";
import { ListItem } from "../ListItem";
import { Container } from "../ListItem/styles";
import { StyledList, Title } from "./styles";

export const List = (props: IProps) => {
    const { clients } = props;
    return (
        <StyledList>
            <Container>
                <Title flex={1}> {"Name".toUpperCase()} </Title>
                <Title flex={3}>{"Description".toUpperCase()}</Title>
            </Container>
            {clients.map((item: any) => {
                return (
                    <ListItem {...item} key={uuid()} />
                );
            })}
        </StyledList>
    );
};
