/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import 'core-js/stable';
// https://github.com/gaearon/react-hot-loader#getting-started
import { hot } from 'react-hot-loader/root';
import CssBaseline from "@material-ui/core/CssBaseline";
import * as React from 'react';
import rootRender from '@/service/rootRender';
import { Provider as Context } from './context';
import App from './App';

const MainApp: React.FC = () => {
  return (
    <Context>
      <CssBaseline />
      <App />
    </Context>
  );
};

rootRender(process.env.NODE_ENV === 'development' ? hot(MainApp) : MainApp);

export default MainApp;
