import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';

export default function Header({ routes }) {
    return (
        <div className="header">
            <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact} 
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>
    )
}