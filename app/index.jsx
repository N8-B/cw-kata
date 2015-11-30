// Styles and fonts
import './styles/main.scss';
import 'font-awesome-webpack';

// React and React Router
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './components/App';

// Render main app
main();

function main() {
  const app = document.createElement('div');

  document.body.appendChild(app);

  ReactDOM.render(<App />, app);
}
