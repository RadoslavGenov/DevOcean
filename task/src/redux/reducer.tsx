import { combineReducers, Reducer } from "redux";
import { HomeReducer } from "./Home/reducer";
import { Actions, State } from "./type";

export const reducer: Reducer<State, Actions> = combineReducers({
    home: HomeReducer,
});
