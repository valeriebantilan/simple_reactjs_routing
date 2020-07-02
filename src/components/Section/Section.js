import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';

function Section({routes}) {
    
    return (
        <div className="main" style={{ flex: 1, padding: "10px" }}>
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={route.main}
            />
          ))}
        </Switch>
      </div>
    )
}

export default Section;