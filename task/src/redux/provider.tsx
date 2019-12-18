import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer } from "./reducer";
import { Store } from "./type";

const composeEnhancers =
    process.env.NODE_ENV === "development"
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose;

export const store: Store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
);

interface IProps {
    children: ReactNode;
    className?: string;
}

export function StoreProvider(props: IProps): JSX.Element {
    const { children } = props;
    return <Provider store={store}> {children} </Provider>;
}
