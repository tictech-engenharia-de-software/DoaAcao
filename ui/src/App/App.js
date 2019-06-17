import React from 'react';
import Login from '/Login';
import InstitutionLogin from '/InstitutionLogin';
import EventDeck from '/EventDeck'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = (props) =>
	(
		<Router>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/institutionLogin" exact component={InstitutionLogin} />
				<Route path="/events/" component={EventDeck} />
			</Switch>
		</Router>
	);

		export default App;
