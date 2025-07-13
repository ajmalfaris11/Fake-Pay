// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InputPage from "./pages/InputPage";
import GpayReceiptPage from "./pages/GpayReceiptPage";
import PaytmSuccessPage from "./pages/PaytmSuccessPage";
import PhonePeSuccessPage from "./pages/PhonePeSuccessPage";
import GpaySuccessPage from "./pages/GpaySuccessPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/input/:platform" element={<InputPage />} />
        <Route path="/success/gpay" element={<GpayReceiptPage />} />
        <Route path="/success/paytm" element={<PaytmSuccessPage />} />
        <Route path="/success/phonepe" element={<PhonePeSuccessPage />} />
        <Route path="/success/gpaySuccess" element={<GpaySuccessPage />} />
      </Routes>
    </Router>
  );
}
