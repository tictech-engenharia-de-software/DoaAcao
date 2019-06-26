import React from 'react';
import Login from '/Login';
import InstitutionLogin from '/InstitutionLogin';
import EventDeck from '/EventDeck'
import Chat from '/Chat'
import ChatList from '/ChatList'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = (props) =>
	(
		<Router>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/institutionLogin" exact component={InstitutionLogin} />
				<Route path="/events/" component={EventDeck} />
				<Route path="/Chat/" component={Chat} />
				<Route path="/ChatList/" component={ChatList} />
			</Switch>
		</Router>
	);

		export default App;
