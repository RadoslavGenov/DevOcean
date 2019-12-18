import { Actions } from "../type";
import { ActionTypes } from "./actions";

export interface IInitialState {
    clients: any[];
    loading: boolean;
    error: string;
}

const initialState: Readonly<IInitialState> = {
    clients: [],
    error: "",
    loading: false,
};

export function HomeReducer(state: IInitialState = initialState, action: Actions) {
    switch (action.type) {
        case ActionTypes.GET_CLIENTS:
            const { clients } = action.payload;
            return { ...state, clients, loading: false };
        case ActionTypes.LOADING:
            return { ...state, loading: true };
        case ActionTypes.GET_CLIENTS_FAIL:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}
