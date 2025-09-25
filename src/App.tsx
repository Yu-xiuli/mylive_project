import { lazy, Suspense, useCallback } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { RouteItem, RouterList } from "@/router/index";

function App() {
  const renderRoute = useCallback((routeParam: RouteItem) => {
    const Component = lazy(routeParam.ac);
    return (
      <Route
        key={routeParam.path}
        path={routeParam.path}
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        }
      />
    );
  }, []);

  return (
    <Router>
      <Routes>
        {RouterList.map((item: RouteItem) => {
          if (item?.routes) {
            return item.routes.map((route: RouteItem) => renderRoute(route));
          }
          return renderRoute(item);
        })}
      </Routes>
    </Router>
  );
}

export default App;
