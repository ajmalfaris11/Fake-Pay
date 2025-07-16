// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InputPage from "./pages/InputPage";
import SelectScreenshotType from "./pages/SelectScreenshotType";
import GpayReceiptPage from "./pages/GpayReceiptPage";
import PaytmSuccessPage from "./pages/PaytmSuccessPage";
import PhonePeSuccessPage from "./pages/PhonePeSuccessPage";
import GpaySuccessPage from "./pages/GpaySuccessPage";
import PaytmReceiptPage from "./pages/PaytmReceiptPage"
import LatestPaytmSuccessPage from "./pages/LatestPaytmSuccessPage";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:platform/option" element={<SelectScreenshotType />} />
        <Route path="/:platform/:option/input" element={<InputPage />} />
        <Route path="/gpay/success/page" element={<GpaySuccessPage />} />
        <Route path="/gpay/receipt/page" element={<GpayReceiptPage />} />
        <Route path="/phonepe/success/page" element={<PhonePeSuccessPage />} />
        <Route path="/paytm/success/page" element={<PaytmSuccessPage />} />
        <Route path="/paytm/receipt/page" element={<PaytmReceiptPage />} />
        <Route path="/paytm/latest_success/page" element={<LatestPaytmSuccessPage />} />
      </Routes>
    </Router>
  );
}
