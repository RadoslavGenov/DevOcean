import React, { useEffect } from "react";
import { connect } from "react-redux";
import { List } from "../../components/common/List";
import { Spinner } from "../../components/common/Spinner";
import { getClients } from "../../redux/Home/actions";

export interface IProps {
    clients: any[];
    loading?: boolean;
    getClients?(): () => [];
}

export interface IState {
    home: {
        clients: any[],
        loading: boolean,
    };
}

const HomeScreen: React.SFC<IProps> = (props: IProps) => {
    useEffect(() => {
        if (props.getClients) {
            props.getClients();
        }
    }, []);

    return !props.loading ? <List clients={props.clients} /> : <Spinner />;
};

function mapStateToProps(state: IState): any {
    const { clients, loading } = state.home;
    return {
        clients,
        loading,
    };
}

export const ConnectedHomeScreen: any = connect<any, any, IProps, IState>(mapStateToProps, { getClients })(HomeScreen);
