import Header from "./components/Header";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
