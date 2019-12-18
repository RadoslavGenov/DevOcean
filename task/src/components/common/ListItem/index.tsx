import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Text } from "./styles";

interface IProps {
    name: string;
    description: string;
    bgColor: string;
    style: {};
}

export const ListItem = (props: IProps) => {
    const [state, setState] = useState({
        bgColor: props.bgColor || "",
    });

    const history = useHistory();

    const changeColor: ((color: string) => void) = (color: string) => {
        setState({ bgColor: color });
    };

    const navigate = () => {
        // I use bgColor as a flag to reuse the component and to give a background-color on demand
        // the other option was to rewrite the component for the list of "Nearby Places" but most of
        // functionality would have been identical.
        if (!props.bgColor) {
            history.push("/view-item", { item: props });
        }
    };

    const renderListItem: () => JSX.Element = () => (
        <Container
            style={props.style}
            bgColor={state.bgColor}
            onMouseEnter={() => props.bgColor || changeColor("lightgray")}
            onMouseLeave={() => props.bgColor || changeColor("")}
            onClick={navigate}
        >
            <Text flex={1}>
                {props.name}
            </Text>
            <Text flex={3}>
                {props.description}
            </Text>
        </Container >
    );

    return renderListItem();
};
