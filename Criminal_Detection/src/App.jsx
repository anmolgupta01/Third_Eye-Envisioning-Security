import "./App.css";
import Authentication from "./components/Authentication";
import { useState } from "react";
import Home from "./components/Home";

function App() {
  const [page, setPage] = useState("auth");
  return (
    <>
      {page === "home" ? (
        <Home setPage={setPage} />
      ) : (
        <Authentication setPage={setPage} />
      )}
    </>
  );
}

export default App;
