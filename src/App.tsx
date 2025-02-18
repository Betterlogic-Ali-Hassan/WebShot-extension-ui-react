import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Options from "./pages/options/Options";
import ShortKey from "./pages/options/ShortKey";
import CaptureTools from "./pages/options/CaptureTools";
import ActionMenuSettings from "./pages/options/ActionMenuSettings";
import AdvancedOptions from "./pages/options/AdvancedOptions";
import RecordingSettings from "./pages/options/RecordingSettings";
import SavingPreferences from "./pages/options/SavingPreferences";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/options/*' element={<Options />}>
            <Route path='action' element={<ActionMenuSettings />} />
            <Route path='adv' element={<AdvancedOptions />} />
            <Route path='capture' element={<CaptureTools />} />
            <Route path='recording' element={<RecordingSettings />} />
            <Route path='save' element={<SavingPreferences />} />
            <Route path='short-key' element={<ShortKey />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
