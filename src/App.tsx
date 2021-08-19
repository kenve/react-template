import React, { Suspense, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Fallback from '@/components/Fallback';
import routes from './routes';

const App: React.FC = () => {
  const RouteLayouts = useMemo(
    () =>
      routes.map((route) => (
        <Route
          key={route.key ?? route.path?.toString()}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          component={route.component}
        />
      )),
    []
  );

  return (
    <ConfigProvider>
      <Router>
        <Suspense fallback={Fallback}>
          <Switch>
            {RouteLayouts}
            <Redirect key="redirect-to-home" path="*" to="/dashboard" />
          </Switch>
        </Suspense>
      </Router>
    </ConfigProvider>
  );
};

export default App;
