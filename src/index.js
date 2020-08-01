import React, { Suspense } from "react";
import reactDOM from "react-dom";

const App = React.lazy(() => import("./App"));

reactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
