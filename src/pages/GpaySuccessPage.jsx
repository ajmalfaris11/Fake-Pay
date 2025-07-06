// src/pages/SuccessPagePlatform1.jsx
import NavBar from "../components/NavBar";

export default function GpaySuccessPage() {
  return (
    <div>
      <NavBar />
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">Payment Successful! 🎉</h2>
        <p>Your payment with Platform 1 was processed successfully.</p>
      </div>
    </div>
  );
}
