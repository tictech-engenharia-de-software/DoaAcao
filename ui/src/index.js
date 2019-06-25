import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from '/Store';
import App from '/App'


render(
	<Provider store={store}>
		<React.Fragment>
			<CssBaseline/>
			<App/>
		</React.Fragment>
	</Provider>,
	document.getElementById("root"),
);
