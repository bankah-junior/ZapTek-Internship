import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/index';

import RootLayout from "./layouts/RootLayout";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
