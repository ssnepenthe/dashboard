import {
  Switch,
  Route
} from "react-router-dom";
import RootWarning from "./root-warning";

import Demo from "./Demo";
import Sidebar from "./sidebar";
import SiteList from "./sitelist";
import StatusBar from "./statusbar";

function Frame ( props ) {
	return <>
		<StatusBar/>
		<div className="columns">
			<div className="column is-one-fifth fixed-column ml-5 mr-5">
				<Sidebar />
			</div>
			<div className="column is-offset-one-fifth is-four-fifths">
				<section className="main-area">
					<RootWarning />
					<Switch>
						<Route path="/placeholder">
							<section className="section">
								<h1 className="title">Hello!</h1>
							</section>
						</Route>
						<Route path="/demo">
							<Demo />
						</Route>
						<Route path="/">
							<SiteList />
						</Route>
					</Switch>
				</section>
			</div>
		</div>
	</>;
}

export default Frame;