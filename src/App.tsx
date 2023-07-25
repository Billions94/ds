import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './route/routes';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(([path, Component], index) => (
          <Route key={path + index} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
