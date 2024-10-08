import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./components/common/WHNotFoundPage";
import { ToastContainer } from "react-toastify";
import {
  AboutPage,
  LandingPage,
  PropertyPage,
  Dashboard,
  Accounts,
} from "@/screens";

import TestDeleteAccount from "./screens/TestDeleteAccount";
import Signin from "./screens/Signup/Signin";
import Signup from "./screens/Signup/Signup";
import ContactUs from "./screens/contact-us/ContactPage";
import Partner from "./screens/PartnerPage/PartnerPage";
import ArticlePage from "./screens/ArticlePage/Index";
import APage1 from "./screens/ArticlePage/DifferentArticles/APage1";

export default function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/article" element={<ArticlePage />} />
          <Route path="/Partner" element={<Partner />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/PropertyPage" element={<PropertyPage />} />

          {/* article differnet pages */}
          <Route path="/article-page1" element={<APage1 />} />

          <Route path="/delete-account" element={<TestDeleteAccount />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          {/* <Route path="/financial" element={<Financial />} />
          <Route path="/property-management" element={<PropertyManagement />} />
          <Route path="/lease-management" element={<LeaseManagement />} /> */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}
