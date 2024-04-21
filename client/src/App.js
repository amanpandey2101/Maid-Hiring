import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Header from "./Component/Header/Header";
import Footer from "./Component/Header/Footer";
import Home from "./Component/MainComponent/Home";
import About from "./Component/MainComponent/About";
import Contact from "./Component/MainComponent/Contact";
import Service from "./Component/MainComponent/Service";
import Hire from "./Pages/Hire";
import Login from "./Pages/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Status from "./UserDashboard/Application/Status";
import AdminDashboard from "./AdminDashboard"
import ApplicationList from "./AdminDashboard/Application/Application";
import ScrollToTop from "./Utilities/ScrollToTop";
import CompanySignup from "./Pages/CompanySignup";
function App() {
  const location = useLocation();

  const shouldRenderNavbarAndFooter = !["/userDashboard/application","/adminDashboard/application"].includes(
    location.pathname
  );
  return (
    <div className="">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/register" element={<Hire />} />
          <Route path="/client-register" element={<CompanySignup/>} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/userDashboard"
            element={<ProtectedRoutes component={UserDashboard} />}
          >
            <Route
              path="application"
              element={<ProtectedRoutes component={Status} />}
            />
          </Route>
          <Route
            path="/adminDashboard"
            element={<ProtectedRoutes component={AdminDashboard} />}
          >
            <Route
              path="application"
              element={<ProtectedRoutes component={ApplicationList} />}
            />
          </Route>
        </Routes>

        {shouldRenderNavbarAndFooter && <Footer />}
      </AuthProvider>
      <ScrollToTop/>
    </div>
  );
}

export default App;
