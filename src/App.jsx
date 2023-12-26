import UseEffcet from "./modules/useEfect/useEffcet";
import "./App.css";
// import GetApi from './modules/Auth/Auth'
import AppRouter from "./routing/appRouter";
import { Route, Router } from "react-router-dom";
function App() {
  return (
    <>
      <div className="app-container">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
