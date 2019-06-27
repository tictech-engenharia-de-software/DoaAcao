import React from 'react';
import Login from '/Login';
import InstitutionLogin from '/InstitutionLogin';
import ManageEventsPage from '/ManageEventsPage';
import EventsPage from '/EventsPage'
import InstitutionChat from '/InstitutionChat';
import InstitutionChatList from '/InstitutionChatList';
import Chat from '/Chat'
import ChatList from '/ChatList'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = (props) =>
	(
		<Router>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/institution-login" exact component={InstitutionLogin} />
				<Route path="/manage-events" exact component={ManageEventsPage} />
				<Route path="/events" component={EventsPage} />
				<Route path="/chat/:chatId" component={Chat} />
				<Route path="/institution-chat/:chatId" component={InstitutionChat} />
				<Route path="/chat" component={ChatList} />
				<Route path="/institution-chat" component={InstitutionChatList} />
			</Switch>
		</Router>
	);

export default App;
