import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { withLogo } from "./hoc/withLogo";
import { StoreProvider } from "./redux";
import { ConnectedHomeScreen } from "./screens/HomeScreen";
import { ViewItemScreen } from "./screens/ViewItemScreen";

const App: React.FC = () => (
	<StoreProvider>
		<Switch>
			<Route exact path={"/"} component={ConnectedHomeScreen} />
			<Route path={"/view-item"} component={ViewItemScreen} />
		</Switch>
	</StoreProvider>
);


export default withLogo(App);
