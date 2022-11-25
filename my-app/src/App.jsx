import "./App.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
    // <MainPage></MainPage>
  );
}

export default App;
