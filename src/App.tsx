import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Options from "./pages/Options";
import ScreenshotHistory from "./pages/screenshotHistory";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/options' element={<Options />}></Route>
          <Route
            path='/screenShot-history'
            element={<ScreenshotHistory />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
