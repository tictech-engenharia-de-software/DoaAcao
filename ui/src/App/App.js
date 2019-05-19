import React from 'react';
import Login from '/Login';
import EventDeck from '/EventDeck'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = (props) =>
	(
		<Router>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/events/" component={EventDeck} />
			</Switch>
		</Router>
	);

		export default App;
