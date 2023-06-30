//React Family
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//Pages and Layout Family
import RootLayout from "./Layouts/RootLayout";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  const container = createBrowserRouter(
    createRoutesFromElements(
      <Route to="rootlayout" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <div className="App">
      {" "}
      <RouterProvider router={container} />{" "}
    </div>
  );
}

export default App;
