import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FirstAidPage from "./pages/FirstAidPage";
import Instruction from "./components/FirstAid/Instruction";
import NearestHospitalsPage from "./pages/NearestHospitalsPage";
import EmergencyContactsPage from "./pages/EmergencyContactsPage";
import InstructionPage from "./pages/InstructionPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/first-aid-instructions" exact>
          <FirstAidPage />
        </Route>
        <Route path="/first-aid-instructions/:id">
          <InstructionPage />
        </Route>
        <Route path="/nearest-hospitals" exact>
          <NearestHospitalsPage />
        </Route>
        <Route path="/emergency-contacts" exact>
          <EmergencyContactsPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
