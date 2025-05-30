import { BrowserRouter, Routes, Route, Router } from "react-router";
import ShowProducts from "./components/ShowProducts";
import AddProduct from "./components/AddProduct";
import DeleteProduct from "./components/DeleteProduct";
import App from "./App";

const Routes1 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/add" element={<AddProduct />} />

          <Route path="/delete" element={<DeleteProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routes1;
