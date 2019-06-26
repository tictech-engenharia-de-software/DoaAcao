import React from 'react';
import Login from '/Login';
import InstitutionLogin from '/InstitutionLogin';
import ManageEventsPage from '/ManageEventsPage';
import EventsPage from '/EventsPage'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = (props) =>
	(
		<Router>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/institution-login" exact component={InstitutionLogin} />
				<Route path="/manage-events" exact component={ManageEventsPage} />
				<Route path="/events" component={EventsPage} />
			</Switch>
		</Router>
	);

export default App;
