import * as React from "react";
import { useHistory } from "react-router-dom";
import { ListItem } from "../../components/common/ListItem";
import { IProps } from "../HomeScreen";
import styles from "./styles";

export const ViewItemScreen: React.SFC<IProps> = (props: IProps) => {
    const history = useHistory();
    const { item } = history.location.state;
    const { address } = item;

    return (
        <styles.Container>
            <styles.ImageContainer>
                <styles.Image
                    src={item.image}
                    width={"100%"}
                    height={"400px"}
                />
            </styles.ImageContainer>
            <styles.BottomContainer>
                <styles.Address>
                    <styles.Title>Address</styles.Title>
                    <styles.Description>{`${address.number} ${address.street}`}</styles.Description>
                    <styles.Description>{`${address.city}, ${address.country} ${address.zip}`}</styles.Description>
                </styles.Address>
                <styles.Contact>
                    <styles.Title>Contact</styles.Title>
                    <styles.Description>{`${item.phone}`}</styles.Description>
                    <styles.Description>{`${item.email}`}</styles.Description>
                </styles.Contact>
                <styles.Nearby>
                    <styles.Title>Nearby Places</styles.Title>
                    {/* Reusing this component, the mock data */}
                    {/* did not return any data related to "Nearby Places" */}
                    <ListItem {...item} style={{ margin: "10px" }} bgColor="lightgray" />
                    <ListItem {...item} style={{ margin: "10px" }} bgColor="lightgray" />
                    <ListItem {...item} style={{ margin: "10px" }} bgColor="lightgray" />
                    <ListItem {...item} style={{ margin: "10px" }} bgColor="lightgray" />
                </styles.Nearby>
            </styles.BottomContainer>
        </styles.Container >
    );
};

