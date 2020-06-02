import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.comp';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
