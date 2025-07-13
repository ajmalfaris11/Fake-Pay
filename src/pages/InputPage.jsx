import { useState } from "react";
import NavBar from "../components/NavBar";
import { useParams, useNavigate } from "react-router-dom";
import { bankList } from "../data/bankList";

export default function InputPage() {
  const { platform, option } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    receiverName: "Fashion Friday",
    senderName: "",
    receiverNumber: "+91 75589 69093",
    amount: "",
    dateTime: "",
    bank: "",
    upiTransactionId: "",
    senderBank: "",
    receiverAccount: "Federal Bank",
    googleTransactionId: "",
    message: "",
  });

  function generateUpiId() {
    const firstDigit = '5';
    let remainingDigits = '';
    for (let i = 0; i < 11; i++) {
      remainingDigits += Math.floor(Math.random() * 10);
    }
    return `${firstDigit}${remainingDigits}`;
  }

  function generateTransactionId() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
    const firstDigit = 'CICAgKj';
    let remainingDigits = '';
    for (let i = 0; i < 7; i++) {
      remainingDigits += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${firstDigit}${remainingDigits}`;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add current date & time when form is submitted
    const currentDateTime = new Date().toISOString();

    const updatedFormData = {
      ...formData,
      upiTransactionId: generateUpiId(),
      dateTime: currentDateTime,
      googleTransactionId: generateTransactionId(),
    };
    setFormData(updatedFormData);
    navigate(`/${platform}/${option}/page`, { state: updatedFormData });
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-black flex flex-col items-center ">
      <NavBar />

      <div className="mt-20 w-full max-w-2xl px-3">
        <h2 className="text-center text-3xl font-bold dark:text-white text-gray-900 mb-2">
          Enter Payment Details
        </h2>
        <p className="text-center dark:text-gray-400 text-gray-500 mb-6">
          Complete the form to generate your {platform} payment success page.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-6 dark:bg-gray-900"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-600 mb-1">
              Sender Name
            </label>
            <input
              type="text"
              name="senderName"
              value={formData.senderName}
              placeholder="Enter your name"
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-500 dark:bg-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-600 mb-1">
              Amount (₹)
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              placeholder="Payment amount"
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-indigo-500 dark:bg-black"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-600 mb-1">
              Message
            </label>
            <input
              type="text"
              name="message"
              value={formData.message}
              placeholder="Message (optional)"
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-indigo-500 dark:bg-black"
            />
          </div>


          {/* <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-600 mb-1">
              Date & Time
            </label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-indigo-500 dark:bg-black"
              required
            />
          </div> */}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              Sender Bank
            </label>
            <select
              name="senderBank"
              value={formData.senderBank}
              onChange={handleChange}
              className="border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 w-full bg-white dark:bg-black text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">-- Select Bank --</option>
              {bankList.map((bank) => (
                <option key={bank.id} value={bank.name}>
                  {bank.name}
                </option>
              ))}
            </select>
          </div>


          <button
            type="submit"
            className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white font-medium px-6 py-3 rounded-lg transition w-full col-span-full"
          >
            Generate Payment
          </button>
        </form>
      </div>
    </div>
  );
}
