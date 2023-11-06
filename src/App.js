import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions/action";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const { tickets } = useSelector((state) => state.dataSlice);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return tickets ? (
    <div className="main">
      <Navbar />
      <Dashboard />
    </div>
  ) : (
    console.error("Something went wrong")
  );
};

export default App;
