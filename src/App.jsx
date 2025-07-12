// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InputPage from "./pages/InputPage";
import SuccessPagePlatform1 from "./pages/GpaySuccessPage";
import PaytmSuccessPage from "./pages/PaytmSuccessPage";
import PhonePeSuccessPage from "./pages/phonePeSuccessPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/input/:platform" element={<InputPage />} />
        <Route path="/success/gpay" element={<SuccessPagePlatform1 />} />
        <Route path="/success/paytm" element={<PaytmSuccessPage />} />
        <Route path="/success/phonepe" element={<PhonePeSuccessPage />} />
      </Routes>
    </Router>
  );
}
