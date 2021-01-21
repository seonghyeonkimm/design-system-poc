import React from "react";

const Welcome = React.lazy(() => import("shared/Welcome"));

const App = () => (
  <div>
    <h1>Context Provider</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Name">
      <Welcome />
    </React.Suspense>
  </div>
);

export default App;
