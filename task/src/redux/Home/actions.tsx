import { batch } from "react-redux";
import { ApiService } from "../../services/ApiService";
import { createAction } from "../action";
import { DispatchAction } from "../type";

export enum ActionTypes {
    GET_CLIENTS = "GET_CLIENTS",
    LOADING = "LOADING",
    GET_CLIENTS_FAIL = "GET_CLIENTS_FAIL",
}

export const Actions = {
    getClients: () => createAction(ActionTypes.GET_CLIENTS),
};

export function getClients(): DispatchAction {
    return async (dispatch) => {
        dispatch({ payload: true, type: ActionTypes.LOADING });
        try {
            const { data } = await ApiService();
            batch(() => {
                dispatch({ payload: false, type: ActionTypes.LOADING });
                dispatch({ payload: data, type: ActionTypes.GET_CLIENTS });
            });
        } catch (error) {
            batch(() => {
                dispatch({ payload: false, type: ActionTypes.GET_CLIENTS_FAIL });
                dispatch({ payload: error, type: ActionTypes.GET_CLIENTS });
            });
        }
    };
}

