import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import swDev from './swDev'

const rootElement = document.getElementById("root");
const customHistory = createBrowserHistory({
	// basename: config.urlBasename || ""
});
ReactDOM.render(
	<Router history={customHistory}>
		<Route
			component={({ history }) => {
				window.appHistory = history;
				return <Main />;
			}}
		/>
	</Router>,
	rootElement
);
swDev()